import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreateCompanyDto,
  ): Promise<import('@prisma/client').Company> {
    return await this.prisma.company.create({ data });
  }

  async findAll(): Promise<any> {
    return await this.prisma.company.findMany({ include: { products: true } });
  }

  async findOne(id: string): Promise<any> {
    return await this.prisma.company.findUnique({
      where: { id },
      include: { products: true },
    });
  }

  async update(id: string, data: UpdateCompanyDto): Promise<any> {
    return await this.prisma.company.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<any> {
    return await this.prisma.company.delete({ where: { id } });
  }
}
