import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from './materias.entity';
import { MateriasController } from './materias.controller';
import { MateriasService } from './materias.service';
import { AlumnosModule } from 'src/alumnos/alumnos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Materia]),
  AlumnosModule,],
  controllers: [MateriasController],
  providers: [MateriasService],
})
export class MateriasModule {}
