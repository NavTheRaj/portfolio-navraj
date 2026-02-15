import type { Portfolio } from "@domain/entities/portfolio";
import type { PortfolioRepository } from "@domain/repositories/portfolioRepository";
import { portfolioData } from "@infrastructure/data/portfolioData";

export class LocalPortfolioRepository implements PortfolioRepository {
  async getPortfolio(): Promise<Portfolio> {
    return Promise.resolve(portfolioData);
  }
}
