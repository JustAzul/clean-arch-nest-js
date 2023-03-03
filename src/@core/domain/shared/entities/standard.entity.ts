import { instanceToPlain } from 'class-transformer';

export class StandardEntity {
  public serialize() {
    return instanceToPlain(this) as typeof this;
  }
}
