import { Interceptor, InvocationContext, Next, Provider } from '@loopback/core';
import { ExpressRequestHandler } from '@loopback/rest';
export declare class FacebookOauthInterceptor implements Provider<Interceptor> {
    facebookStrategy: ExpressRequestHandler;
    constructor(facebookStrategy: ExpressRequestHandler);
    value(): (invocationCtx: InvocationContext, next: Next) => Promise<import("@loopback/core").NonVoid>;
}
