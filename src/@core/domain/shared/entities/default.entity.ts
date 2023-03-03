import { instanceToPlain } from 'class-transformer';

export const DefaultEntityCreatedDateName = 'createdAt';
export const DefaultEntityUpdatedDateName = 'updatedAt';

export class DefaultEntity {
  public readonly id?: any;
  public readonly [DefaultEntityCreatedDateName]: Date;
  public [DefaultEntityUpdatedDateName]: Date;

  public constructor(createdAt?: Date, updatedAt?: Date) {
    this[DefaultEntityCreatedDateName] = createdAt || new Date();
    this[DefaultEntityUpdatedDateName] = updatedAt || new Date();
  }

  public serialize() {
    return instanceToPlain(this) as typeof this;
  }
}
