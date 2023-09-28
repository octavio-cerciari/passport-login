"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceBookOauth2Authentication = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const authentication_passport_1 = require("@loopback/authentication-passport");
const core_1 = require("@loopback/core");
const passport_facebook_1 = require("passport-facebook");
const types_1 = require("./types");
let FaceBookOauth2Authentication = class FaceBookOauth2Authentication {
    /**
     * create an oauth2 strategy for facebook
     */
    constructor(passportStrategy) {
        this.passportStrategy = passportStrategy;
        this.name = 'oauth2-facebook';
        this.strategy = new authentication_passport_1.StrategyAdapter(this.passportStrategy, this.name, types_1.mapProfile.bind(this));
    }
    /**
     * authenticate a request
     * @param request
     */
    async authenticate(request) {
        return this.strategy.authenticate(request);
    }
};
exports.FaceBookOauth2Authentication = FaceBookOauth2Authentication;
exports.FaceBookOauth2Authentication = FaceBookOauth2Authentication = tslib_1.__decorate([
    (0, core_1.injectable)(authentication_1.asAuthStrategy, (0, core_1.extensionFor)(types_1.PassportAuthenticationBindings.OAUTH2_STRATEGY)),
    tslib_1.__param(0, (0, core_1.inject)('facebookStrategy')),
    tslib_1.__metadata("design:paramtypes", [passport_facebook_1.Strategy])
], FaceBookOauth2Authentication);
//# sourceMappingURL=facebook.js.map