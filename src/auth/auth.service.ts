import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>, private jwtService: JwtService) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<{ message: string }> {
    const { username, password, country, city } = authCredentialsDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({
      username,
      password: hashedPassword,
      country,
      city,
    });
    try {
      await user.save();
      if (user) return { message: 'Регистрация прошла успешно' };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Пользователь уже существует');
      }
      throw error;
    }
  }

  async signIn(user: User): Promise<{ accessToken: string }> {
    const payload = { username: user.username, sub: user._id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(pass, user.password);
    if (valid) {
      return user;
    }

    return null;
  }
}
