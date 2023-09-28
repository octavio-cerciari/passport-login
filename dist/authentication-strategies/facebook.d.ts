/// <reference types="express" />
import { AuthenticationStrategy } from '@loopback/authentication';
import { StrategyAdapter } from '@loopback/authentication-passport';
import { RedirectRoute, Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { Strategy } from 'passport-facebook';
import { User } from '../models';
export declare class FaceBookOauth2Authentication implements AuthenticationStrategy {
    passportStrategy: Strategy;
    name: string;
    protected strategy: StrategyAdapter<User>;
    /**
     * create an oauth2 strategy for facebook
     */
    constructor(passportStrategy: Strategy);
    /**
     * authenticate a request
     * @param request
     */
    authenticate(request: Request): Promise<UserProfile | RedirectRoute>;
}
