import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosCuestionarios } from './alumnos_cuestionarios.entity';
import { AlumnosCuestionariosService } from './alumnos_cuestionarios.service';
import { AlumnosCuestionariosController } from './alumnos_cuestionarios.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([AlumnosCuestionarios])
    ],
    controllers: [AlumnosCuestionariosController],
    providers: [AlumnosCuestionariosService],
    exports: [AlumnosCuestionariosService] // Exportar para usar en otros módulos
})
export class AlumnosCuestionariosModule {}