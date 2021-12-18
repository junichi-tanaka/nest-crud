import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';

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

    @Put(':id/update')
    async update(
        @Param('id') id: string,
        @Body() user: UpdateUserDTO,
    ): Promise<UpdateResult> {
        return await this.service.update(Number(id), user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<DeleteResult> {
        return await this.service.delete(Number(id));
    }
}
