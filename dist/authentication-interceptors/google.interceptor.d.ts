import { Interceptor, InvocationContext, Next, Provider } from '@loopback/core';
import { ExpressRequestHandler } from '@loopback/rest';
export declare class GoogleOauthInterceptor implements Provider<Interceptor> {
    googleStrategy: ExpressRequestHandler;
    constructor(googleStrategy: ExpressRequestHandler);
    value(): (invocationCtx: InvocationContext, next: Next) => Promise<import("@loopback/core").NonVoid>;
}
