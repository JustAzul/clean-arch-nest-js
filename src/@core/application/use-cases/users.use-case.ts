import { Injectable, Logger } from '@nestjs/common';

import { UserEntity } from 'src/@core/domain/entities/user.entity';
import { UserRepository } from '../ports/user.repository';

@Injectable()
export class UsersUseCase {
  private readonly logger: Logger = new Logger(UsersUseCase.name);

  constructor(private readonly userRepository: UserRepository) {}

  public async getAllUsers(): Promise<UserEntity[]> {
    this.logger.debug('Getting all users');

    const users: UserEntity[] = await this.userRepository.findAll();
    return users;
  }
}
