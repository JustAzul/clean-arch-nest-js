import {
  DefaultEntity,
  DefaultEntityCreatedDateName,
  DefaultEntityUpdatedDateName,
} from '../shared/default.entity';

export type DefaultEntityCreatedDateName = keyof Pick<
  DefaultEntity,
  typeof DefaultEntityCreatedDateName
>;

export type DefaultEntityUpdatedDateName = keyof Pick<
  DefaultEntity,
  typeof DefaultEntityUpdatedDateName
>;

export type OmitDatabaseDateKeys<T> = Omit<
  T,
  DefaultEntityCreatedDateName | DefaultEntityUpdatedDateName
>;

export type OmitEntityCreatedDate<Entity> = Omit<
  Entity,
  DefaultEntityCreatedDateName
>;

export type OmitEntityUpdatedDate<Entity> = Omit<
  Entity,
  DefaultEntityUpdatedDateName
>;
