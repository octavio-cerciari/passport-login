import { Provider } from '@loopback/core';
import { ExpressRequestHandler } from '@loopback/rest';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';
export declare class CustomOauth2ExpressMiddleware implements Provider<ExpressRequestHandler> {
    oauth2Strategy: OAuth2Strategy;
    constructor(oauth2Strategy: OAuth2Strategy);
    value(): any;
}
