import { UserIdentityService } from '@loopback/authentication';
import { Provider } from '@loopback/core';
import { Profile } from 'passport';
import { Strategy as GoogleStrategy, StrategyOptions } from 'passport-google-oauth2';
import { User } from '../models';
export declare class GoogleOauth implements Provider<GoogleStrategy> {
    oauth2Options: StrategyOptions;
    userService: UserIdentityService<Profile, User>;
    strategy: GoogleStrategy;
    constructor(oauth2Options: StrategyOptions, userService: UserIdentityService<Profile, User>);
    value(): GoogleStrategy;
}
