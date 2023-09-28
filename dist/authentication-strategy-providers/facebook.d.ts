import { UserIdentityService } from '@loopback/authentication';
import { Provider } from '@loopback/core';
import { Profile } from 'passport';
import { Strategy as FacebookStrategy, StrategyOptions } from 'passport-facebook';
import { User } from '../models';
export declare class FacebookOauth implements Provider<FacebookStrategy> {
    facebookOptions: StrategyOptions;
    userService: UserIdentityService<Profile, User>;
    strategy: FacebookStrategy;
    constructor(facebookOptions: StrategyOptions, userService: UserIdentityService<Profile, User>);
    value(): FacebookStrategy;
}
