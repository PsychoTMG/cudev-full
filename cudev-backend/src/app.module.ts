import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [PrismaModule, PortfolioModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
