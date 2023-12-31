"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapProfile = exports.verifyFunctionFactory = exports.oauth2ProfileFunction = exports.PassportAuthenticationBindings = void 0;
const tslib_1 = require("tslib");
const security_1 = require("@loopback/security");
const axios_1 = tslib_1.__importDefault(require("axios"));
var PassportAuthenticationBindings;
(function (PassportAuthenticationBindings) {
    PassportAuthenticationBindings.OAUTH2_STRATEGY = 'passport.authentication.oauth2.strategy';
})(PassportAuthenticationBindings || (exports.PassportAuthenticationBindings = PassportAuthenticationBindings = {}));
const oauth2ProfileFunction = (accessToken, done) => {
    // call the profile url in the mock authorization app with the accessToken
    axios_1.default
        .get('http://localhost:9000/verify?access_token=' + accessToken, {
        headers: { Authorization: accessToken },
    })
        .then(response => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const profile = response.data;
        profile.id = profile.userId;
        profile.emails = [{ value: profile.email }];
        profile.provider = 'custom-oauth2';
        done(null, profile);
    })
        .catch(err => {
        done(err);
    });
};
exports.oauth2ProfileFunction = oauth2ProfileFunction;
/**
 * provides an appropriate verify function for oauth2 strategies
 * @param accessToken
 * @param refreshToken
 * @param profile
 * @param done
 */
const verifyFunctionFactory = function (userService) {
    return function (accessToken, refreshToken, profile, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    done) {
        // look up a linked user for the profile
        userService
            .findOrCreateUser(profile)
            .then((user) => {
            done(null, user);
        })
            .catch((err) => {
            done(err);
        });
    };
};
exports.verifyFunctionFactory = verifyFunctionFactory;
/**
 * map passport profile to UserProfile in `@loopback/security`
 * @param user
 */
const mapProfile = function (user) {
    const userProfile = {
        [security_1.securityId]: '' + user.id,
        profile: {
            ...user,
        },
    };
    return userProfile;
};
exports.mapProfile = mapProfile;
//# sourceMappingURL=types.js.map