import { SyncOrAsync } from 'src/@core/shared/types/sync-or-async';

export interface IUseCase<Input, Output> {
  execute(): SyncOrAsync<Output>;
  execute(input: Input): SyncOrAsync<Output>;
  execute(input?: Input): SyncOrAsync<Output>;
}
