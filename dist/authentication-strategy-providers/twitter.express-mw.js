"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterOauthExpressMiddleware = void 0;
const tslib_1 = require("tslib");
const passport = require('passport');
const core_1 = require("@loopback/core");
const passport_twitter_1 = require("passport-twitter");
let TwitterOauthExpressMiddleware = class TwitterOauthExpressMiddleware {
    constructor(twitterStrategy) {
        this.twitterStrategy = twitterStrategy;
        passport.use(this.twitterStrategy);
    }
    value() {
        return passport.authenticate('twitter');
    }
};
exports.TwitterOauthExpressMiddleware = TwitterOauthExpressMiddleware;
exports.TwitterOauthExpressMiddleware = TwitterOauthExpressMiddleware = tslib_1.__decorate([
    core_1.injectable.provider({ scope: core_1.BindingScope.SINGLETON }),
    tslib_1.__param(0, (0, core_1.inject)('twitterStrategy')),
    tslib_1.__metadata("design:paramtypes", [passport_twitter_1.Strategy])
], TwitterOauthExpressMiddleware);
//# sourceMappingURL=twitter.express-mw.js.map