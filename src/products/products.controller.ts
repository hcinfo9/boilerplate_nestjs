import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('products')
@ApiBearerAuth('access-token')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Criar Produto' })
  @ApiResponse({ status: 201, description: 'Produto criada com sucesso' })
  async create(@Body() dto: CreateProductDto): Promise<any> {
    return await this.productsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar Todos Produtos' })
  @ApiResponse({ status: 201, description: 'Produtos encontrados com sucesso' })
  async findAll(): Promise<any> {
    return await this.productsService.findMany();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar Produto por ID' })
  @ApiResponse({ status: 201, description: 'Produto encontrado com sucesso' })
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.productsService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Atualizar Produto' })
  @ApiResponse({ status: 201, description: 'Produto atualizado com sucesso' })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<any> {
    return await this.productsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Deletar Produto' })
  @ApiResponse({ status: 201, description: 'Produto deletado com sucesso' })
  async remove(@Param('id') id: string): Promise<any> {
    return await this.productsService.remove(id);
  }
}
