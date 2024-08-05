import { IUser } from '../IUsers';

export interface UserRepository {
  find(id: IUser['id']): IUser;
  findAll(): IUser[];
  create(user: IUser): void;
  update(user: IUser): IUser;
  remove(id: IUser['id']): void;
}
