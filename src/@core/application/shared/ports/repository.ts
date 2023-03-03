import { Injectable } from '@nestjs/common';
import { WithoutMethods } from 'src/@core/domain/shared/types/without-methods.type';

@Injectable()
export abstract class Repository<Entity> {
  abstract createOne(UserEntity: Entity): Promise<Entity>;
  abstract createMany(entities: Entity[]): Promise<Entity[]>;

  abstract deleteOne(
    findCondition: Partial<WithoutMethods<Entity>>,
  ): Promise<Entity>;
  abstract deleteOneByID(id: any): Promise<Entity>;

  abstract deleteMany(
    findCondition: Partial<WithoutMethods<Entity>>,
  ): Promise<number>;
  abstract deleteManyByIDs(
    ids: any[],
    data: Partial<WithoutMethods<Entity>>,
  ): Promise<number>;

  abstract findOne(
    findCondition: Partial<WithoutMethods<Entity>>,
  ): Promise<Entity>;
  abstract findOneByID(id: any): Promise<Entity>;

  abstract findMany(
    findCondition: Partial<WithoutMethods<Entity>>,
  ): Promise<Entity[]>;
  abstract findManyByIDs(ids: any[]): Promise<Entity[]>;

  abstract findAll(): Promise<Entity[]>;

  abstract updateOne(
    findCondition: Partial<WithoutMethods<Entity>>,
    data: Partial<WithoutMethods<Entity>>,
  ): Entity;
  abstract updateOneByID(
    id: any,
    data: Partial<WithoutMethods<Entity>>,
  ): Promise<Entity>;

  abstract updateMany(
    findCondition: Partial<WithoutMethods<Entity>>,
    data: Partial<WithoutMethods<Entity>>,
  ): Promise<Entity[]>;

  abstract updateManyByIDs(
    ids: any[],
    data: Partial<WithoutMethods<Entity>>,
  ): Promise<Entity>[];
}
