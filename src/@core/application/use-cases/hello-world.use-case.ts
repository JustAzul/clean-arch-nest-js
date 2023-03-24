import { IUseCase } from './shared/default.use-case';

export class HelloWorldUseCase implements IUseCase<never, string> {
  public execute(): string {
    return 'Hello World!';
  }
}
