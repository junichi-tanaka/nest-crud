import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(User: CreateUserDTO): Promise<InsertResult> {
        return await this.userRepository.insert(User);
    }

    async find(id: number): Promise<User> | null {
        return await this.userRepository.findOne({ id: id });
    }
}
