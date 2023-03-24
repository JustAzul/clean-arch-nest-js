import { DefaultEntity } from '../shared/default.entity';

export type UserEntityConstructor = {
  id: number | bigint;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export class UserEntity extends DefaultEntity {
  public readonly id: number;

  public name: string;

  public constructor(props: UserEntityConstructor) {
    super(props.createdAt, props.updatedAt);

    this.id = Number(props.id);
    this.name = props.name;
  }
}
