import { Injectable, Logger } from '@nestjs/common';

import { IUserRepository } from '../ports/user.repository';
import { UserEntity } from 'src/@core/domain/entities/user.entity';

@Injectable()
export class UsersUseCase {
  private readonly logger: Logger = new Logger(UsersUseCase.name);

  constructor(private readonly userRepository: IUserRepository) {}

  public async getAllUsers(): Promise<UserEntity[]> {
    this.logger.debug('Getting all users');

    const users: UserEntity[] = await this.userRepository.findAll();
    return users;
  }
}
