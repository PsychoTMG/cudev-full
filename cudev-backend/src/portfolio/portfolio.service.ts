import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PortfolioService {
  constructor(private readonly prisma: PrismaService) { }


  findAll = async () => {
    return await this.prisma.project.findMany()
  }

}
