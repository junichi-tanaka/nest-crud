import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';
import { CreateUserDTO } from './user.dto';
import { InsertResult } from 'typeorm';

@Controller('user')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Get()
    async getUserList(): Promise<User[]> {
        return await this.service.findAll();
    }

    @Post()
    async addUser(@Body() user: CreateUserDTO): Promise<InsertResult> {
        return await this.service.create(user);
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.service.find(Number(id));
    }
}
