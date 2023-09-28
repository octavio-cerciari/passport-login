import { Provider } from '@loopback/core';
import { ExpressRequestHandler } from '@loopback/rest';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
export declare class GoogleOauth2ExpressMiddleware implements Provider<ExpressRequestHandler> {
    strategy: GoogleStrategy;
    constructor(strategy: GoogleStrategy);
    value(): any;
}
