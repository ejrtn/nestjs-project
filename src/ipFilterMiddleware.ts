import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class IpFilterMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const ipAddress = req.headers['host'];
        if (ipAddress != 'localhost:3000') {

            throw new UnauthorizedException('invalid ip');
        }

        next();
    }
}