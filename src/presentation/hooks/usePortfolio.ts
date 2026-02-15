import { useEffect, useMemo, useState } from "react";
import type { Portfolio } from "@domain/entities/portfolio";
import { GetPortfolioUseCase } from "@application/useCases/getPortfolio";
import { LocalPortfolioRepository } from "@infrastructure/repositories/localPortfolioRepository";

type UsePortfolioResult = {
  data: Portfolio | null;
  isLoading: boolean;
  error: string | null;
};

export function usePortfolio(): UsePortfolioResult {
  const useCase = useMemo(
    () => new GetPortfolioUseCase(new LocalPortfolioRepository()),
    []
  );

  const [data, setData] = useState<Portfolio | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    useCase
      .execute()
      .then((payload) => {
        if (!isMounted) {
          return;
        }
        setData(payload);
      })
      .catch(() => {
        if (!isMounted) {
          return;
        }
        setError("Unable to load portfolio data.");
      })
      .finally(() => {
        if (!isMounted) {
          return;
        }
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [useCase]);

  return { data, isLoading, error };
}
