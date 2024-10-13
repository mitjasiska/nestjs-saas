import { Controller, Get, Post, Req, UseGuards, Body } from '@nestjs/common';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthPayloadDto } from './dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(LocalGuard)
  login(@Body() authPayloadDto: AuthPayloadDto, @Req() req: Request) {
    return { token: req.user };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() req: Request) {
    return req.user;
  }
}
