import {
  OmitDatabaseDateKeys,
  OmitEntityCreatedDate,
} from 'src/@core/domain/types/omit-entity-dates.type';

import { DefaultEntity } from 'src/@core/domain/shared/default.entity';
import { ExcludeFunctionMethods } from 'src/@core/shared/types/exclude-function-methods.type';
import { Injectable } from '@nestjs/common';
import { OmitID } from 'src/@core/shared/types/omit-id.type';
import { PickTypeOfID } from 'src/@core/shared/types/pick-type-of-id.type';
import { SyncOrAsync } from 'src/@core/shared/types/sync-or-async';

@Injectable()
export abstract class IRepository<Entity extends DefaultEntity> {
  abstract createOne(
    entity: OmitDatabaseDateKeys<OmitID<Entity>>,
  ): SyncOrAsync<Entity>;

  abstract createMany(
    entities: OmitDatabaseDateKeys<OmitID<Entity>>[],
  ): SyncOrAsync<Entity[]>;

  abstract deleteOne(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
  ): SyncOrAsync<Entity>;

  abstract deleteOneByID(id: PickTypeOfID<Entity>): SyncOrAsync<Entity>;

  abstract deleteMany(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
  ): SyncOrAsync<number>;

  abstract deleteManyByIDs(ids: PickTypeOfID<Entity>[]): SyncOrAsync<number>;

  abstract findOne(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
  ): SyncOrAsync<Entity>;

  abstract findOneByID(id: PickTypeOfID<Entity>): SyncOrAsync<Entity>;

  abstract findMany(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
  ): SyncOrAsync<Entity[]>;

  abstract findManyByIDs(ids: PickTypeOfID<Entity>[]): SyncOrAsync<Entity[]>;

  abstract findAll(): SyncOrAsync<Entity[]>;

  abstract updateOne(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
    data: Partial<
      ExcludeFunctionMethods<OmitID<OmitEntityCreatedDate<Entity>>>
    >,
  ): Entity;

  abstract updateOneByID(
    id: PickTypeOfID<Entity>,
    data: Partial<
      ExcludeFunctionMethods<OmitID<OmitEntityCreatedDate<Entity>>>
    >,
  ): SyncOrAsync<Entity>;

  abstract updateMany(
    findCondition: Partial<
      ExcludeFunctionMethods<OmitDatabaseDateKeys<OmitID<Entity>>>
    >,
    data: Partial<
      ExcludeFunctionMethods<OmitID<OmitEntityCreatedDate<Entity>>>
    >,
  ): SyncOrAsync<Entity[]>;

  abstract updateManyByIDs(
    ids: PickTypeOfID<Entity>[],
    data: Partial<
      ExcludeFunctionMethods<OmitID<OmitEntityCreatedDate<Entity>>>
    >,
  ): SyncOrAsync<Entity>[];
}
