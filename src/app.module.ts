import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseSetUp } from './setup/setup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CarrerasModule } from './carreras/carreras.module';
import { CuestionariosModule } from './cuestionarios/cuestionarios.module';
import { GruposModule } from './grupos/grupos.module';
import { GruposAsignadosModule } from './grupos_asignados/grupos_asignados.module';
import { InventarioDeFelderModule } from './inventario_de_felder/inventario_de_felder.module';
import { PerfilFinalInventarioDeFelderModule } from './perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { ProfesorModule } from './profesor/profesor.module';
import { EstrategiaEnsenanzaModule } from './estrategias_enseñanza/estrategias_enseñanza.module';
import { MateriasModule } from './materias/materias.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ConfigModule } from '@nestjs/config';
import { UnidadesModule } from './unidades/unidades.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AlumnosCuestionariosModule } from './alumnos_cuestionarios/alumnos_cuestionarios.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, // hace que ConfigService esté disponible en toda la app
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseSetUp
    }),
    AlumnosModule,
    CarrerasModule,
    CuestionariosModule,
    GruposModule,
    GruposAsignadosModule,
    InventarioDeFelderModule,
    PerfilFinalInventarioDeFelderModule,
    PreguntasModule,
    ProfesorModule,
    EstrategiaEnsenanzaModule,
    MateriasModule,
    AdministradorModule,
    UnidadesModule,
    CloudinaryModule,
    AlumnosCuestionariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
