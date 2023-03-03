import { NonMethodKeys } from './non-method-keys.type';
export type WithoutMethods<T> = Pick<T, NonMethodKeys<T>>;
