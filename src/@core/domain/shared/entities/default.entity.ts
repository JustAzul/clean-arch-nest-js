import { instanceToPlain } from 'class-transformer';

export class DefaultEntity {
  public id?: any;

  public serialize() {
    return instanceToPlain(this) as typeof this;
  }
}
