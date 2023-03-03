import { ExcludeFunctionMethods } from 'src/@core/domain/shared/types/exclude-function-methods.type';
import { Injectable } from '@nestjs/common';
import { OmitDatabaseDateKeys } from 'src/@core/domain/shared/types/omit-database-date-keys.type';
import { OmitID } from 'src/@core/domain/shared/types/omit-id.type';

@Injectable()
export abstract class Repository<Entity> {
  abstract createOne(UserEntity: Entity): Promise<Entity>;
  abstract createMany(entities: Entity[]): Promise<Entity[]>;

  abstract deleteOne(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<Entity>>
    >,
  ): Promise<Entity>;

  abstract deleteOneByID(id: any): Promise<Entity>;

  abstract deleteMany(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<Entity>>
    >,
  ): Promise<number>;

  abstract deleteManyByIDs(ids: any[]): Promise<number>;

  abstract findOne(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<Entity>>
    >,
  ): Promise<Entity>;

  abstract findOneByID(id: any): Promise<Entity>;

  abstract findMany(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<Entity>>
    >,
  ): Promise<Entity[]>;

  abstract findManyByIDs(ids: any[]): Promise<Entity[]>;

  abstract findAll(): Promise<Entity[]>;

  abstract updateOne(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<Entity>>
    >,
    data: Partial<ExcludeFunctionMethods<OmitID<Entity>>>,
  ): Entity;

  abstract updateOneByID(
    id: any,
    data: Partial<ExcludeFunctionMethods<OmitID<Entity>>>,
  ): Promise<Entity>;

  abstract updateMany(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<Entity>>
    >,
    data: Partial<ExcludeFunctionMethods<OmitID<Entity>>>,
  ): Promise<Entity[]>;

  abstract updateManyByIDs(
    ids: any[],
    data: Partial<ExcludeFunctionMethods<OmitID<Entity>>>,
  ): Promise<Entity>[];
}
