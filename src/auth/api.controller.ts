import { Body, Controller, Get, Request, UseGuards, ValidationPipe, UseInterceptors } from '@nestjs/common';

import { ApiService } from './api.service';
import { EditUserNameDto } from './dto/edit-username.dto';
import { DeleteUserNameDto } from './dto/delete-username.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RefreshInterceptor } from './interceptors/refresh.interseptor';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}
  @UseInterceptors(RefreshInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Request() req) {
    return this.apiService.getMe(req.user);
  }

  @UseInterceptors(RefreshInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('users')
  async users() {
    return this.apiService.getUsers();
  }

  @UseInterceptors(RefreshInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('edit')
  async editUser(@Body(ValidationPipe) editUserNameDto: EditUserNameDto): Promise<any> {
    return await this.apiService.editUser(editUserNameDto);
  }

  @UseInterceptors(RefreshInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('delete')
  async deleteUser(@Body(ValidationPipe) deleteUserNameDto: DeleteUserNameDto): Promise<any> {
    return await this.apiService.deleteUser(deleteUserNameDto);
  }
}
