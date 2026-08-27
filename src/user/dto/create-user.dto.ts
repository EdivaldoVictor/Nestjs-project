import { IsString } from 'class-validator';


export class CreateUserDto {
    @IsString()
    @Minlength(3)
    name: string;

    @IsEmail()
    email: string;
}