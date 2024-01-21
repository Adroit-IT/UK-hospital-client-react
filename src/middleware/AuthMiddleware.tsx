export class AuthMiddleware {
  static isAuthenticated(token: string | null): boolean {
    // Perform authentication checks here (e.g., check if the token is valid)
    return !!token;
  }
}
