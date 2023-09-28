import { DefaultCrudRepository } from '@loopback/repository';
import { CoredbDataSource } from '../datasources';
import { UserCredentials } from '../models';
export declare class UserCredentialsRepository extends DefaultCrudRepository<UserCredentials, typeof UserCredentials.prototype.id, UserCredentials> {
    constructor(dataSource: CoredbDataSource);
}
