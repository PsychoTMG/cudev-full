import { Controller, Get, Param } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';


@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) { }


  @Get()
  findAll() {
    return this.portfolioService.findAll();
  }
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.portfolioService.findOne(slug);
  }
}
