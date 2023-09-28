import { Provider } from '@loopback/core';
import { ExpressRequestHandler } from '@loopback/rest';
import { Strategy as FacebookStrategy } from 'passport-facebook';
export declare class FacebookOauth2ExpressMiddleware implements Provider<ExpressRequestHandler> {
    facebookStrategy: FacebookStrategy;
    constructor(facebookStrategy: FacebookStrategy);
    value(): any;
}
