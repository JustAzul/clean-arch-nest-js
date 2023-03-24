import { IRepository } from './shared/repository';
import { UserEntity } from '../../domain/entities/user.entity';

export abstract class IUserRepository extends IRepository<UserEntity> {}
