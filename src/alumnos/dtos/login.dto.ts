import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class LoginAlumnoDto {
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    nro_cuenta: number;

    @IsString()
    @IsNotEmpty()
    contraseña: string;
}