import { DefaultCrudRepository } from '@loopback/repository';
import { CoredbDataSource } from '../datasources';
import { UserIdentity } from '../models';
export declare class UserIdentityRepository extends DefaultCrudRepository<UserIdentity, typeof UserIdentity.prototype.id, UserIdentity> {
    constructor(dataSource: CoredbDataSource);
}
