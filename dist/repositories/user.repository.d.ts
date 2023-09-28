import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { CoredbDataSource } from '../datasources';
import { User, UserCredentials, UserIdentity } from '../models';
import { UserCredentialsRepository } from './user-credentials.repository';
import { UserIdentityRepository } from './user-identity.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    protected profilesGetter: Getter<UserIdentityRepository>;
    protected credentialsGetter: Getter<UserCredentialsRepository>;
    readonly profiles: HasManyRepositoryFactory<UserIdentity, typeof User.prototype.id>;
    readonly credentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.id>;
    constructor(dataSource: CoredbDataSource, profilesGetter: Getter<UserIdentityRepository>, credentialsGetter: Getter<UserCredentialsRepository>);
}
