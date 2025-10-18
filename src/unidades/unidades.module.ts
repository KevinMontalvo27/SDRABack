import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidades } from './entities/unidades.entity';
import { Temas } from './entities/temas.entity';
import { ObjetosAprendizaje } from './entities/objetos_aprendizaje.entity';
import { UnidadesController } from './controllers/unidades.controller';
import { UnidadesService } from './services/unidades.service';

@Module({
    imports: [TypeOrmModule.forFeature([Unidades, Temas, ObjetosAprendizaje])],
    controllers: [UnidadesController],
    providers: [UnidadesService],

})
export class UnidadesModule {
}
