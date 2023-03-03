import { Injectable } from '@nestjs/common';
import { Repository } from '../shared/ports/repository';
import { UserEntity } from '../../domain/entities/user.entity';

@Injectable()
export abstract class UserRepository extends Repository<UserEntity> {}
