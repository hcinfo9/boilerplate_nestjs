import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto): Promise<any> {
    return await this.prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        company: {
          connect: { id: data.companyId },
        },
      },
    });
  }

  async findMany(): Promise<any> {
    return await this.prisma.product.findMany({
      include: {
        company: true,
      },
    });
  }

  async findOne(id: string): Promise<any> {
    return await this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, data: UpdateProductDto): Promise<any> {
    return await this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
        price: data.price,
      },
    });
  }

  async remove(id: string): Promise<any> {
    return await this.prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
}
