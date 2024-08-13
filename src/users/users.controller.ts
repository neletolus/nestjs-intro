import { Body, Controller, Get, Param, Post, Query, Req, Headers, Ip } from '@nestjs/common';
import { Request } from 'express';


@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  public getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(id);
    console.log(limit);
    return 'users get';
  }

  @Post()
  public createUsers(@Body() request: any, @Headers() headers: any, @Ip() ip: any) {
    console.log(request);
    console.log(headers);
    console.log(ip);
    return 'users post';
  }
}
