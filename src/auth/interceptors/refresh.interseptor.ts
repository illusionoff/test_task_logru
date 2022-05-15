import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RefreshInterceptor implements NestInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((user) => {
        const payload = { username: user.username, sub: user._id };
        const accessToken = this.jwtService.sign(payload);
        if (user._doc) return { ...user._doc, accessToken };
        return { ...user, accessToken };
      }),
    );
  }
}
