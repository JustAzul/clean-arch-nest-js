import { DefaultEntity } from 'src/@core/domain/shared/entities/default.entity';
import { ExcludeFunctionMethods } from 'src/@core/domain/shared/types/exclude-function-methods.type';
import { Injectable } from '@nestjs/common';
import { OmitDatabaseDateKeys } from 'src/@core/domain/shared/types/omit-database-date-keys.type';
import { OmitID } from 'src/@core/domain/shared/types/omit-id.type';
import { PickTypeOfID } from 'src/@core/domain/shared/types/pick-type-of-id.type';

@Injectable()
export abstract class Repository<Entity extends DefaultEntity> {
  abstract createOne(entity: OmitID<Entity>): Promise<Entity>;
  abstract createMany(entities: OmitID<Entity>[]): Promise<Entity[]>;

  abstract deleteOne(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
  ): Promise<Entity>;

  abstract deleteOneByID(id: PickTypeOfID<Entity>): Promise<Entity>;

  abstract deleteMany(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
  ): Promise<number>;

  abstract deleteManyByIDs(ids: PickTypeOfID<Entity>[]): Promise<number>;

  abstract findOne(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
  ): Promise<Entity>;

  abstract findOneByID(id: PickTypeOfID<Entity>): Promise<Entity>;

  abstract findMany(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
  ): Promise<Entity[]>;

  abstract findManyByIDs(ids: PickTypeOfID<Entity>[]): Promise<Entity[]>;

  abstract findAll(): Promise<Entity[]>;

  abstract updateOne(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
    data: Partial<ExcludeFunctionMethods<OmitID<Entity>>>,
  ): Entity;

  abstract updateOneByID(
    id: PickTypeOfID<Entity>,
    data: Partial<ExcludeFunctionMethods<OmitID<Entity>>>,
  ): Promise<Entity>;

  abstract updateMany(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
    data: Partial<ExcludeFunctionMethods<OmitID<Entity>>>,
  ): Promise<Entity[]>;

  abstract updateManyByIDs(
    ids: PickTypeOfID<Entity>[],
    data: Partial<ExcludeFunctionMethods<OmitID<Entity>>>,
  ): Promise<Entity>[];
}
