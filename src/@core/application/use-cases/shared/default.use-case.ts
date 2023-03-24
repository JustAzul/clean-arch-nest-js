import { SyncOrAsync } from 'src/@core/shared/types/sync-or-async';

export interface IUseCase<Input = never, Output = void> {
  execute(input?: Input): SyncOrAsync<Output>;
}
