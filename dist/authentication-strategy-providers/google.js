"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleOauth = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const passport_google_oauth2_1 = require("passport-google-oauth2");
const types_1 = require("../authentication-strategies/types");
const services_1 = require("../services");
let GoogleOauth = class GoogleOauth {
    constructor(oauth2Options, userService) {
        this.oauth2Options = oauth2Options;
        this.userService = userService;
        this.strategy = new passport_google_oauth2_1.Strategy(this.oauth2Options, (0, types_1.verifyFunctionFactory)(this.userService));
    }
    value() {
        return this.strategy;
    }
};
exports.GoogleOauth = GoogleOauth;
exports.GoogleOauth = GoogleOauth = tslib_1.__decorate([
    core_1.injectable.provider({ scope: core_1.BindingScope.SINGLETON }),
    tslib_1.__param(0, (0, core_1.inject)('googleOAuth2Options')),
    tslib_1.__param(1, (0, core_1.inject)(services_1.UserServiceBindings.PASSPORT_USER_IDENTITY_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], GoogleOauth);
//# sourceMappingURL=google.js.map