import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumnos } from './alumnos.entity';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';
import { AlumnosCuestionariosModule } from 'src/alumnos_cuestionarios/alumnos_cuestionarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Alumnos]), AlumnosCuestionariosModule],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
