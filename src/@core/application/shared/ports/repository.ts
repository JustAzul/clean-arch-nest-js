import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class Repository<Entity> {
  abstract createOne(UserEntity: Entity): Promise<Entity>;
  abstract createMany(entities: Entity[]): Promise<Entity[]>;

  abstract deleteOne(findCondition: Partial<Entity>): Promise<Entity>;
  abstract deleteOneByID(id: any): Promise<Entity>;

  abstract deleteMany(findCondition: Partial<Entity>): Promise<number>;
  abstract deleteManyByIDs(ids: any[], data: Partial<Entity>): Promise<number>;

  abstract findOne(findCondition: Partial<Entity>): Promise<Entity>;
  abstract findOneByID(id: any): Promise<Entity>;

  abstract findMany(findCondition: Partial<Entity>): Promise<Entity[]>;
  abstract findManyByIDs(ids: any[]): Promise<Entity[]>;

  abstract findAll(): Promise<Entity[]>;

  abstract updateOne(
    findCondition: Partial<Entity>,
    data: Partial<Entity>,
  ): Entity;
  abstract updateOneByID(id: any, data: Partial<Entity>): Promise<Entity>;

  abstract updateMany(
    findCondition: Partial<Entity>,
    data: Partial<Entity>,
  ): Promise<Entity[]>;

  abstract updateManyByIDs(
    ids: any[],
    data: Partial<Entity>,
  ): Promise<Entity>[];
}
