/**
 * useApi Hook
 * Custom hook for simplified API calls with loading/error states
 */

import { useState, useCallback } from "react";
import { api } from "@/services/api";

interface UseApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  isSuccess: boolean;
}

export function useApi<T = unknown>(
  initialData: T | null = null
): UseApiState<T> & {
  request: (endpoint: string, options?: RequestInit) => Promise<T | null>;
  reset: () => void;
} {
  const [data, setData] = useState<T | null>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const request = useCallback(
    async (endpoint: string, options?: RequestInit) => {
      setIsLoading(true);
      setError(null);
      setIsSuccess(false);

      try {
        const response = await api.get<T>(endpoint, options);
        setData(response);
        setIsSuccess(true);
        return response;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setError(error);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setData(initialData);
    setError(null);
    setIsLoading(false);
    setIsSuccess(false);
  }, [initialData]);

  return { data, isLoading, error, isSuccess, request, reset };
}
