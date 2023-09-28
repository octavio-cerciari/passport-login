/// <reference types="express" />
import { AuthenticationStrategy } from '@loopback/authentication';
import { StrategyAdapter } from '@loopback/authentication-passport';
import { RedirectRoute, Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { Strategy } from 'passport-google-oauth2';
import { User } from '../models';
export declare class GoogleOauth2Authentication implements AuthenticationStrategy {
    passportstrategy: Strategy;
    name: string;
    protected strategy: StrategyAdapter<User>;
    /**
     * create an oauth2 strategy for google
     */
    constructor(passportstrategy: Strategy);
    /**
     * authenticate a request
     * @param request
     */
    authenticate(request: Request): Promise<UserProfile | RedirectRoute>;
}
