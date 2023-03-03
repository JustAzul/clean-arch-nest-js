import { StandardEntity } from './../shared/entities/standard.entity';

export type UserEntityConstructor = {
  id: number | bigint;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export class UserEntity extends StandardEntity {
  public readonly id: number;
  public name: string;
  public readonly createdAt: Date;
  public updatedAt: Date;

  private constructor(props: UserEntityConstructor) {
    super();

    this.id = Number(props.id);
    this.name = props.name;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
