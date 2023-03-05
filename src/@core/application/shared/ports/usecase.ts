import { SyncOrAsync } from 'src/@core/domain/shared/types/sync-or-async';

export interface IUseCase<Input, Output> {
  execute(): SyncOrAsync<Output>;
  execute(input: Input): SyncOrAsync<Output>;
  execute(input?: Input): SyncOrAsync<Output>;
}
