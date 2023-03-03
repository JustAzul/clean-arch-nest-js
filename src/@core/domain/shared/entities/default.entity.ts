import { instanceToPlain } from 'class-transformer';

export class DefaultEntity {
  public serialize() {
    return instanceToPlain(this) as typeof this;
  }
}
