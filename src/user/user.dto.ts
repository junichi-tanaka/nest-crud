import {
    IsNotEmpty,
    IsString,
    IsOptional,
    IsInt,
    Min,
    Max,
} from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    age: number;
}

export class UpdateUserDTO {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsNotEmpty()
    age: number;
}
