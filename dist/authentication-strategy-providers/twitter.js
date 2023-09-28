"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterOauth = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const passport_twitter_1 = require("passport-twitter");
const types_1 = require("../authentication-strategies/types");
const services_1 = require("../services");
let TwitterOauth = class TwitterOauth {
    constructor(oauthOptions, userService) {
        this.oauthOptions = oauthOptions;
        this.userService = userService;
        this.strategy = new passport_twitter_1.Strategy(this.oauthOptions, (0, types_1.verifyFunctionFactory)(this.userService));
    }
    value() {
        return this.strategy;
    }
};
exports.TwitterOauth = TwitterOauth;
exports.TwitterOauth = TwitterOauth = tslib_1.__decorate([
    core_1.injectable.provider({ scope: core_1.BindingScope.SINGLETON }),
    tslib_1.__param(0, (0, core_1.inject)('twitterOAuthOptions')),
    tslib_1.__param(1, (0, core_1.inject)(services_1.UserServiceBindings.PASSPORT_USER_IDENTITY_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], TwitterOauth);
//# sourceMappingURL=twitter.js.map