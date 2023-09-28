import { Provider } from '@loopback/core';
import { ExpressRequestHandler } from '@loopback/rest';
import { Strategy as TwitterStrategy } from 'passport-twitter';
export declare class TwitterOauthExpressMiddleware implements Provider<ExpressRequestHandler> {
    twitterStrategy: TwitterStrategy;
    constructor(twitterStrategy: TwitterStrategy);
    value(): any;
}
