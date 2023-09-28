import { UserIdentityService } from '@loopback/authentication';
import { Provider } from '@loopback/core';
import { Profile } from 'passport';
import { Strategy as OAuth2Strategy, StrategyOptions as OAuth2StrategyOptions } from 'passport-oauth2';
import { ProfileFunction } from '../authentication-strategies/types';
import { User } from '../models';
export declare class CustomOauth2 implements Provider<OAuth2Strategy> {
    oauth2Options: OAuth2StrategyOptions;
    profileFn: ProfileFunction;
    userService: UserIdentityService<Profile, User>;
    strategy: OAuth2Strategy;
    constructor(oauth2Options: OAuth2StrategyOptions, profileFn: ProfileFunction, userService: UserIdentityService<Profile, User>);
    value(): import("passport-oauth2");
}
