import { IRepository } from './shared/repository';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/entities/user.entity';

@Injectable()
export abstract class IUserRepository extends IRepository<UserEntity> {}
