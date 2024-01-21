export class AuthController {
  static login(username: string, password: string): Promise<string> {
    // Simulate an authentication API call, return a token upon success
    return Promise.resolve('mockedAuthToken');
  }

  static logout(): Promise<void> {
    // Simulate a logout API call
    return Promise.resolve();
  }
}
