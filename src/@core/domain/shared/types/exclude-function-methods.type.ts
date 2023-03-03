import { PickNonMethodKeys } from './pick-non-method-keys.type';
export type ExcludeFunctionMethods<T> = Pick<T, PickNonMethodKeys<T>>;
