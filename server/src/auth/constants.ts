import { SetMetadata } from "@nestjs/common";

export const jwtConstants = {
  secret: 'secretKey',
  expiresIn: 3,
};

export const IS_PUBLIC_KEY = 'isPublic';
export const SkipJwtAuth = () => SetMetadata(IS_PUBLIC_KEY, true);