import { IUser } from 'domain/application/interfaces/IUsers';
import { UserRepository } from 'domain/application/interfaces/persistence/user.repository';

export class PostgresUserRepository implements UserRepository {
  find(id: IUser['id']): IUser {
    throw new Error('Method not implemented.');
  }
  findAll(): IUser[] {
    throw new Error('Method not implemented.');
  }
  create(user: IUser): void {
    throw new Error('Method not implemented.');
  }
  update(user: IUser): IUser {
    throw new Error('Method not implemented.');
  }
  remove(id: IUser['id']): void {
    throw new Error('Method not implemented.');
  }
}
