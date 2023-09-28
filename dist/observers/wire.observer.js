"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.WireObserver = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const wiring_1 = require("../wiring");
/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
let WireObserver = class WireObserver {
    constructor(app) {
        this.app = app;
    }
    /**
     * This method will be invoked when the application initializes. It will be
     * called at most once for a given application instance.
     */
    async init() {
        (0, wiring_1.setupBindings)(this.app);
    }
};
exports.WireObserver = WireObserver;
exports.WireObserver = WireObserver = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('wire'),
    tslib_1.__param(0, (0, core_1.inject)(core_1.CoreBindings.APPLICATION_INSTANCE)),
    tslib_1.__metadata("design:paramtypes", [core_1.Application])
], WireObserver);
//# sourceMappingURL=wire.observer.js.map