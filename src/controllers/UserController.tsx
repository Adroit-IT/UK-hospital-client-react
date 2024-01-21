export class UserController {
  static getUserInfo(token: string): Promise<any> {
    // Simulate an API call to get user information
    return Promise.resolve({ username: 'user123', email: 'user@example.com' });
  }
}
