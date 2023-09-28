import { Application, LifeCycleObserver } from '@loopback/core';
/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
export declare class WireObserver implements LifeCycleObserver {
    private app;
    constructor(app: Application);
    /**
     * This method will be invoked when the application initializes. It will be
     * called at most once for a given application instance.
     */
    init(): Promise<void>;
}
