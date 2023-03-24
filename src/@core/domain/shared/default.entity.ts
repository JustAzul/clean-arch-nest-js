export const DefaultEntityCreatedDateName = 'createdAt';
export const DefaultEntityUpdatedDateName = 'updatedAt';

export interface IEntity {
  id?: any;
  [DefaultEntityCreatedDateName]: Date;
  [DefaultEntityUpdatedDateName]: Date;
}

export class DefaultEntity implements IEntity {
  public readonly id?: any;
  public readonly [DefaultEntityCreatedDateName]: Date;
  public [DefaultEntityUpdatedDateName]: Date;

  public constructor(createdAt?: Date, updatedAt?: Date) {
    this[DefaultEntityCreatedDateName] = createdAt || new Date();
    this[DefaultEntityUpdatedDateName] = updatedAt || new Date();
  }
}
