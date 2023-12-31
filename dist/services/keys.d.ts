import { UserIdentityService } from '@loopback/authentication';
import { BindingKey } from '@loopback/core';
import { Profile as PassportProfile } from 'passport';
import { User } from '../models';
export declare namespace UserServiceBindings {
    const PASSPORT_USER_IDENTITY_SERVICE: BindingKey<UserIdentityService<PassportProfile, User>>;
}
