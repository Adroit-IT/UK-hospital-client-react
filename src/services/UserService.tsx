import { UserController } from '../controllers/UserController';

export class UserService {
  static getUserInfo(token: string): Promise<any> {
    return UserController.getUserInfo(token);
  }
}
