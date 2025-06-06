import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('token')
  @ApiOperation({ summary: 'Gera um token de acesso JWT' })
  @ApiResponse({ status: 201, description: 'Token gerado com sucesso' })
  generateToken(): any {
    return this.authService.generateToken();
  }
}
