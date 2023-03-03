import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class Repository<Entity> {
  abstract createOne(UserEntity: Entity): Entity;
  abstract createMany(entities: Entity[]): Entity[];

  abstract deleteOne(findCondition: Partial<Entity>): Entity;
  abstract deleteOneByID(id: any): Entity;

  abstract deleteMany(findCondition: Partial<Entity>): number;
  abstract deleteManyByIDs(ids: any[], data: Partial<Entity>): number;

  abstract findOne(findCondition: Partial<Entity>): Entity;
  abstract findOneByID(id: any): Entity;

  abstract findMany(findCondition: Partial<Entity>): Entity[];
  abstract findManyByIDs(ids: any[]): Entity[];

  abstract updateOne(
    findCondition: Partial<Entity>,
    data: Partial<Entity>,
  ): Entity;
  abstract updateOneByID(id: any, data: Partial<Entity>): Entity;

  abstract updateMany(
    findCondition: Partial<Entity>,
    data: Partial<Entity>,
  ): Entity[];
  abstract updateManyByIDs(ids: any[], data: Partial<Entity>): Entity[];
}
