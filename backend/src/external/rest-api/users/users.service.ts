import { Injectable } from '@nestjs/common';

import { UserRepository } from './../../../domain/application/interfaces/persistence/user.repository';
import { IUser } from 'src/domain/application/interfaces/IUsers';

@Injectable()
export class UsersServices implements UserRepository {
  // constructor(private readonly userRepo: UserRepository) {}

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
