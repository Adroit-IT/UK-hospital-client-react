import Swal from 'sweetalert2';

interface CustomHeaders {
  [key: string]: string;
}

interface XhrResponse {
  status: number;
  data: any; // Adjust the type based on the expected response
}

export class AuthorizationService {
  private static userDataKey = 'userData';
  private static userData: { accessToken: string; refreshToken: string; userId: string } | null = null;

  static baseURL = import.meta.env.VITE_BASE_API_URL || ''; // Assuming you are using React with Create React App

  static initialize() {
    // Retrieve userData from localStorage during initialization
    const userDataString = localStorage.getItem(this.userDataKey);
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
    } else {
      this.userData = null; // Ensure userData is null if not found in localStorage
    }
  }

  static setTokens(accessToken: string, refreshToken: string, userId: string): void {
    // Store userData in localStorage
    this.userData = { accessToken, refreshToken, userId };
    localStorage.setItem(this.userDataKey, JSON.stringify(this.userData));
  }

  static clearTokens(): void {
    // Remove userData from localStorage
    localStorage.removeItem(this.userDataKey);
    this.userData = null;
  }

  static async authorizedRequest(method: string, endpoint: string, data: any = null, additionalHeaders: CustomHeaders = {}): Promise<XhrResponse> {
    this.initialize();
    if (!this.userData || !this.userData.accessToken) {
      // Optionally, handle the case where there's no access token
      console.error('No access token available');
      return Promise.reject(new Error('No access token available'));
    }

    const url = `${this.baseURL}${endpoint}`;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);

      if (this.userData?.accessToken) {
        xhr.setRequestHeader('Authorization', `Bearer ${this.userData.accessToken}`);
      }

      if (this.userData?.refreshToken) {
        xhr.setRequestHeader('Refresh-Token', this.userData.refreshToken);
      }

      if (this.userData?.userId) {
        xhr.setRequestHeader('userId', this.userData.userId);
      }

      Object.keys(additionalHeaders).forEach((key) => {
        xhr.setRequestHeader(key, additionalHeaders[key]);
      });

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          try {
            if (xhr.status >= 200 && xhr.status < 300) {
              const responseData = JSON.parse(xhr.responseText);
              resolve({
                status: xhr.status,
                data: responseData,
              });

              // Display a success message (customize as needed)
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: responseData.message || 'Operation successful',
              });
            } else {
              // Error response
              const responseData = JSON.parse(xhr.responseText);
              reject(new Error(`Request failed with status ${xhr.status}`));

              // Display an error message (customize as needed)
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: responseData.message || 'Something went wrong',
              });
            }
          } catch (parseError) {
            // Handle parsing error
            console.error('Error parsing response:', parseError);
            reject(new Error('Failed to parse server response.'));
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'Failed to parse server response.',
            });
          }
        }
      };

      xhr.onerror = function () {
        reject(new Error('Network error'));
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Network error. Please try again later.',
        });
      };

      xhr.send(data);
    });
  }
}
