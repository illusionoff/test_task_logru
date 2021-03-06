import { Body, Controller, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { SigninCredentialDto } from './dto/signin-credentials.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ message: string }> {
    return await this.authService.signUp(authCredentialsDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Body(ValidationPipe) signinCredentialDto: SigninCredentialDto, @Request() req) {
    console.log('signin');
    return this.authService.signIn(req.user);
  }
}
