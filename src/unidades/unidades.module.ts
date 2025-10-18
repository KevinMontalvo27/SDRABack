import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidades } from './entities/unidades.entity';
import { Temas } from './entities/temas.entity';
import { ObjetosAprendizaje } from './entities/objetos_aprendizaje.entity';
import { UnidadesController } from './controllers/unidades.controller';
import { UnidadesService } from './services/unidades.service';
import { TemasController } from './controllers/temas.controller';
import { TemasService } from './services/temas.service';
import { ObjetosAprendizajeController } from './controllers/objeto-aprendizaje.controller';
import { ObjetosAprendizajeService } from './services/objetos-aprendizaje.service';

@Module({
    imports: [TypeOrmModule.forFeature([Unidades, Temas, ObjetosAprendizaje])],
    controllers: [UnidadesController, TemasController, ObjetosAprendizajeController],
    providers: [UnidadesService, TemasService, ObjetosAprendizajeService],

})
export class UnidadesModule {
}
