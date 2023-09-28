import { UserIdentityService } from '@loopback/authentication';
import { Provider } from '@loopback/core';
import { Profile } from 'passport';
import { IStrategyOption, Strategy as TwitterStrategy } from 'passport-twitter';
import { User } from '../models';
export declare class TwitterOauth implements Provider<TwitterStrategy> {
    oauthOptions: IStrategyOption;
    userService: UserIdentityService<Profile, User>;
    strategy: TwitterStrategy;
    constructor(oauthOptions: IStrategyOption, userService: UserIdentityService<Profile, User>);
    value(): TwitterStrategy;
}
