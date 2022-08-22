import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

@Injectable()
export default class AuthService {
  accessToken(userId: number): string {
    return jwt.sign(
      {
        userId,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE },
    );
  }

  refreshToken(userId: number): string {
    return jwt.sign(
      {
        userId,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRE },
    );
  }

  validateAccessToken(token: string): boolean {
    try {
      const secret = process.env.JWT_SECRET;
      return jwt.verify(token, secret) ? true : false;
    } catch (error) {
      return false;
    }
  }

  validateRefreshToken(token: string): boolean {
    try {
      const secret = process.env.JWT_REFRESH_SECRET;
      return jwt.verify(token, secret) ? true : false;
    } catch (error) {
      return false;
    }
  }

  //   check ว่า รหัส กับ hash ตรงหันหรือไม่
  validatePassword(password: string, hash: string): Promise<boolean> {
    console.log(`password --> ${password} || hash --> ${hash}`);
    return bcrypt.compare(password, hash);
  }

  getDataToken(access_token: string): { userId: number } {
    try {
      const data = jwt.decode(access_token);
      return { userId: data.userId };
    } catch (error) {
      return { userId: null };
    }
  }
}
