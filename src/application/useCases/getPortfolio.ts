import type { Portfolio } from "@domain/entities/portfolio";
import type { PortfolioRepository } from "@domain/repositories/portfolioRepository";

export class GetPortfolioUseCase {
  constructor(private readonly repository: PortfolioRepository) {}

  execute(): Promise<Portfolio> {
    return this.repository.getPortfolio();
  }
}
