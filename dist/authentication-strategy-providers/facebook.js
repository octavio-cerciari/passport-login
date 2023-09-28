"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookOauth = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const passport_facebook_1 = require("passport-facebook");
const authentication_strategies_1 = require("../authentication-strategies");
const services_1 = require("../services");
let FacebookOauth = class FacebookOauth {
    constructor(facebookOptions, userService) {
        this.facebookOptions = facebookOptions;
        this.userService = userService;
        this.strategy = new passport_facebook_1.Strategy(this.facebookOptions, (0, authentication_strategies_1.verifyFunctionFactory)(this.userService));
    }
    value() {
        return this.strategy;
    }
};
exports.FacebookOauth = FacebookOauth;
exports.FacebookOauth = FacebookOauth = tslib_1.__decorate([
    core_1.injectable.provider({ scope: core_1.BindingScope.SINGLETON }),
    tslib_1.__param(0, (0, core_1.inject)('facebookOAuth2Options')),
    tslib_1.__param(1, (0, core_1.inject)(services_1.UserServiceBindings.PASSPORT_USER_IDENTITY_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], FacebookOauth);
//# sourceMappingURL=facebook.js.map