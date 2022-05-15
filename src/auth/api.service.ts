import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class ApiService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async getMe(user) {
    return user;
  }

  async getUsers(): Promise<any> {
    const users = await this.userModel.find({}, { password: false, __v: false });
    return users;
  }

  async editUser(user): Promise<any> {
    const foundUser = await this.userModel.findOneAndUpdate(
      { username: user.usernamefind },
      { country: user.editCountry, city: user.editCity },
      { new: true, select: { password: false, __v: false } },
    );
    if (!foundUser) {
      return { message: 'Пользователь не найден' };
    }
    await foundUser.save();
    return foundUser;
  }

  async deleteUser(user): Promise<{ message: string }> {
    const foundUser = await this.userModel.findOneAndDelete({
      username: user.usernamefind,
    });
    if (!foundUser) {
      return { message: 'Пользователь не найден' };
    }
    return { message: `Пользователь: ${user.usernamefind} удален` };
  }
}
