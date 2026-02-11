import { DeleteResult, FindManyOptions, FindOneOptions, InsertResult, Repository } from 'typeorm';
import { QueryPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { GenericEntity } from './generic.entity';
export declare abstract class GenericService<Entity extends GenericEntity> {
    private readonly repository;
    constructor(repository: Repository<Entity>);
    create(entity: QueryPartialEntity<Entity> | QueryPartialEntity<Entity>[] | Entity): Promise<InsertResult>;
    find(options?: FindManyOptions<Entity>): Promise<Entity[]>;
    findOne(options?: FindOneOptions<Entity>): Promise<Entity>;
    findOneById(id: any): Promise<Entity>;
    update(id: any, entity: any): Promise<Entity>;
    delete(id: number): Promise<DeleteResult>;
}
