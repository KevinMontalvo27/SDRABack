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
import { EstiloObjetoController } from './controllers/estilo-objeto.controller';
import { EstiloObjetoService } from './services/estilo-objeto.service';
import { EstiloObjeto } from './entities/estilo_objeto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Unidades, Temas, ObjetosAprendizaje, EstiloObjeto])],
    controllers: [UnidadesController, TemasController, ObjetosAprendizajeController, EstiloObjetoController],
    providers: [UnidadesService, TemasService, ObjetosAprendizajeService, EstiloObjetoService],

})
export class UnidadesModule {
}
