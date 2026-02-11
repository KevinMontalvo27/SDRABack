import { FindManyOptions } from 'typeorm';
import { GenericEntity } from './generic.entity';
import { GenericService } from './generic.service';
export declare abstract class GenericController<Entity extends GenericEntity, Service extends GenericService<Entity>> {
    private readonly service;
    constructor(service: Service);
    create(entity: Entity): Promise<import("typeorm").InsertResult>;
    find(options?: FindManyOptions<Entity>): Promise<Entity[]>;
    findOne(id: number): Promise<Entity>;
    update(id: number, entity: Entity): Promise<Entity>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
