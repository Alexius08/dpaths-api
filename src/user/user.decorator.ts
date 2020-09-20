import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/** Pluck specific property from request object */
export const User = createParamDecorator((data, context: ExecutionContext) => {
  const req = context.switchToHttp().getRequest();
  return data ? req.user[data] : req.user;
});
