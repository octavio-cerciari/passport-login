import { Interceptor, InvocationContext, Next, Provider } from '@loopback/core';
export declare class SessionAuth implements Provider<Interceptor> {
    constructor();
    value(): (invocationCtx: InvocationContext, next: Next) => Promise<import("@loopback/core").NonVoid>;
}
