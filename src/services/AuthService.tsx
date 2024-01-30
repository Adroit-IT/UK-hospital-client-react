import { AuthorizationService } from '@apis/xhr';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import Swal from 'sweetalert2';

export interface UserData {
  email: string;
  password: string;
}

const apiService: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export class AuthService {
  static async login(userData: UserData): Promise<any> {
    try {
      const response: AxiosResponse<any> = await apiService.post('auth/login', userData);
      // Assuming your API response includes accessToken, refreshToken, and userId
      const { accessToken, refreshToken, userId } = response.data;

      // Set tokens in AuthorizationService
      AuthorizationService.setTokens(accessToken, refreshToken, userId);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 401) {
          // Display SweetAlert for 401 Unauthorized error
          Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: 'Invalid email or password. Please try again.',
          });

          // Return a rejection to indicate an unsuccessful login
          return Promise.reject(error);
        } else {
          // Handle other Axios errors
          console.error('Axios error:', axiosError.response?.status, axiosError.message);
        }
      } else {
        // Handle non-Axios errors
        console.error('Non-Axios error:', error);
      }

      // Re-throw the error if you still want it to be caught by higher-level error handlers
      throw error;
    }
  }

  static async logout(): Promise<{ success: boolean }> {
    try {
      const response = await AuthorizationService.authorizedRequest('POST', 'auth/logout');
      return { success: response.status === 200 };
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }
}
