import {
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "../constants";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    // add your custom authentication logic here
    // 自定义用户身份验证逻辑
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // skip
    if (isPublic) return true;
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    // You can throw an exception based on either 'info' or 'err' arguments
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}