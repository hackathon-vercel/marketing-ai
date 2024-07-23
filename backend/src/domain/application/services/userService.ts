import { IUser } from '../interfaces/IUsers';
import { UserRepository } from './../interfaces/persistence/user.repository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  find(id: IUser['id']) {
    const findUser = this.userRepository.find(id);
    return findUser;
  }
}
