"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterOauthAuthentication = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const authentication_passport_1 = require("@loopback/authentication-passport");
const core_1 = require("@loopback/core");
const passport_twitter_1 = require("passport-twitter");
const types_1 = require("./types");
let TwitterOauthAuthentication = class TwitterOauthAuthentication {
    /**
     * create an oauth2 strategy for twitter
     */
    constructor(passportstrategy) {
        this.passportstrategy = passportstrategy;
        this.name = 'oauth2-twitter';
        this.strategy = new authentication_passport_1.StrategyAdapter(this.passportstrategy, this.name, types_1.mapProfile.bind(this));
    }
    /**
     * authenticate a request
     * @param request
     */
    async authenticate(request) {
        return this.strategy.authenticate(request);
    }
};
exports.TwitterOauthAuthentication = TwitterOauthAuthentication;
exports.TwitterOauthAuthentication = TwitterOauthAuthentication = tslib_1.__decorate([
    (0, core_1.injectable)(authentication_1.asAuthStrategy, (0, core_1.extensionFor)(types_1.PassportAuthenticationBindings.OAUTH2_STRATEGY)),
    tslib_1.__param(0, (0, core_1.inject)('twitterStrategy')),
    tslib_1.__metadata("design:paramtypes", [passport_twitter_1.Strategy])
], TwitterOauthAuthentication);
//# sourceMappingURL=twitter.js.map