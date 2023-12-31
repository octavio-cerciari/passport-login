"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookOauthInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
let FacebookOauthInterceptor = class FacebookOauthInterceptor {
    constructor(facebookStrategy) {
        this.facebookStrategy = facebookStrategy;
    }
    value() {
        return async (invocationCtx, next) => {
            const requestCtx = invocationCtx.getSync(rest_1.RestBindings.Http.CONTEXT);
            const request = requestCtx.request;
            if (request.query['oauth2-provider-name'] === 'facebook') {
                return (0, rest_1.toInterceptor)(this.facebookStrategy)(invocationCtx, next);
            }
            return next();
        };
    }
};
exports.FacebookOauthInterceptor = FacebookOauthInterceptor;
exports.FacebookOauthInterceptor = FacebookOauthInterceptor = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('facebookStrategyMiddleware')),
    tslib_1.__metadata("design:paramtypes", [Function])
], FacebookOauthInterceptor);
//# sourceMappingURL=facebook.interceptor.js.map