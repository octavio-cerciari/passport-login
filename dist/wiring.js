"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupBindings = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const passport_1 = tslib_1.__importDefault(require("passport"));
const authentication_interceptors_1 = require("./authentication-interceptors");
const authentication_strategies_1 = require("./authentication-strategies");
const authentication_strategy_providers_1 = require("./authentication-strategy-providers");
const services_1 = require("./services");
function setupBindings(app) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    passport_1.default.serializeUser(function (user, done) {
        done(null, user);
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    passport_1.default.deserializeUser(function (user, done) {
        done(null, user);
    });
    app
        .bind(services_1.UserServiceBindings.PASSPORT_USER_IDENTITY_SERVICE)
        .toClass(services_1.PassportUserIdentityService);
    // passport strategies
    const passportStrategies = {
        facebookStrategy: authentication_strategy_providers_1.FacebookOauth,
        googleStrategy: authentication_strategy_providers_1.GoogleOauth,
        twitterStrategy: authentication_strategy_providers_1.TwitterOauth,
        oauth2Strategy: authentication_strategy_providers_1.CustomOauth2,
    };
    for (const key in passportStrategies) {
        app.add((0, core_1.createBindingFromClass)(passportStrategies[key], { key }));
    }
    // passport express middleware
    const middlewareMap = {
        facebookStrategyMiddleware: authentication_strategy_providers_1.FacebookOauth2ExpressMiddleware,
        googleStrategyMiddleware: authentication_strategy_providers_1.GoogleOauth2ExpressMiddleware,
        twitterStrategyMiddleware: authentication_strategy_providers_1.TwitterOauthExpressMiddleware,
        oauth2StrategyMiddleware: authentication_strategy_providers_1.CustomOauth2ExpressMiddleware,
    };
    for (const key in middlewareMap) {
        app.add((0, core_1.createBindingFromClass)(middlewareMap[key], { key }));
    }
    // LoopBack 4 style authentication strategies
    const strategies = [
        authentication_strategies_1.LocalAuthStrategy,
        authentication_strategies_1.FaceBookOauth2Authentication,
        authentication_strategies_1.GoogleOauth2Authentication,
        authentication_strategies_1.TwitterOauthAuthentication,
        authentication_strategies_1.Oauth2AuthStrategy,
        authentication_strategies_1.SessionStrategy,
        authentication_strategies_1.BasicStrategy,
    ];
    for (const s of strategies) {
        app.add((0, core_1.createBindingFromClass)(s));
    }
    // Express style middleware interceptors
    app.bind('passport-init-mw').to((0, rest_1.toInterceptor)(passport_1.default.initialize()));
    app.bind('passport-session-mw').to((0, rest_1.toInterceptor)(passport_1.default.session()));
    app.bind('passport-facebook').toProvider(authentication_interceptors_1.FacebookOauthInterceptor);
    app.bind('passport-google').toProvider(authentication_interceptors_1.GoogleOauthInterceptor);
    app.bind('passport-twitter').toProvider(authentication_interceptors_1.TwitterOauthInterceptor);
    app.bind('passport-oauth2').toProvider(authentication_interceptors_1.CustomOauth2Interceptor);
    app.bind('set-session-user').toProvider(authentication_interceptors_1.SessionAuth);
}
exports.setupBindings = setupBindings;
//# sourceMappingURL=wiring.js.map