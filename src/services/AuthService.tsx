import { AuthController } from '../controllers/AuthController';

export class AuthService {
  static login(username: string, password: string): Promise<string> {
    return AuthController.login(username, password);
  }

  static logout(): Promise<void> {
    return AuthController.logout();
  }
}
