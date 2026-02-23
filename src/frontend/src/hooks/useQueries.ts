import { useActor } from './useActor';

// This file is for React Query hooks that interact with the backend
// Since the backend has no methods, this file is minimal

export function useBackendStatus() {
  const { actor, isFetching } = useActor();
  
  return {
    isConnected: !!actor && !isFetching,
    actor
  };
}
