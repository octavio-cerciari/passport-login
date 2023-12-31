"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const HEADER_SCHEMA = {
    type: 'object',
    properties: {
        'Content-Type': { type: 'string' },
    },
    additionalProperties: true,
};
const PING_RESPONSE = {
    description: 'Ping Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'PingResponse',
                properties: {
                    headers: HEADER_SCHEMA,
                },
            },
        },
    },
};
const USER_PROFILE_RESPONSE = {
    description: 'Session user profile',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'sessionUserProfile',
                properties: {
                    user: { type: 'object' },
                },
            },
        },
    },
};
/**
 * A simple controller to bounce back http requests
 */
let PingController = class PingController {
    constructor(req) {
        this.req = req;
    }
    ping() {
        return {
            headers: Object.assign({}, this.req.headers),
        };
    }
    whoAmI(user) {
        /**
         * controller returns back currently logged in user information
         */
        return {
            user: user.profile,
            headers: Object.assign({}, this.req.headers),
        };
    }
};
exports.PingController = PingController;
tslib_1.__decorate([
    (0, rest_1.get)('/ping', {
        responses: PING_RESPONSE,
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Object)
], PingController.prototype, "ping", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('session'),
    (0, rest_1.get)('/whoAmI', {
        responses: USER_PROFILE_RESPONSE,
    }),
    tslib_1.__param(0, (0, core_1.inject)(security_1.SecurityBindings.USER)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], PingController.prototype, "whoAmI", null);
exports.PingController = PingController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:paramtypes", [Object])
], PingController);
//# sourceMappingURL=ping.controller.js.map