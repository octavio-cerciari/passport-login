"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStrategy = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const repositories_1 = require("../repositories");
const types_1 = require("./types");
let SessionStrategy = class SessionStrategy {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.name = 'session';
    }
    /**
     * authenticate a request
     * @param request
     */
    async authenticate(request) {
        var _a;
        if (!((_a = request === null || request === void 0 ? void 0 : request.session) === null || _a === void 0 ? void 0 : _a.user)) {
            throw new rest_1.HttpErrors.Unauthorized(`Invalid Session`);
        }
        const user = request.session.user;
        if (!user.email || !user.id) {
            throw new rest_1.HttpErrors.Unauthorized(`Invalid user profile`);
        }
        const users = await this.userRepository.find({
            where: {
                email: user.email,
            },
        });
        if (!(users === null || users === void 0 ? void 0 : users.length)) {
            throw new rest_1.HttpErrors.Unauthorized(`User not registered`);
        }
        return (0, types_1.mapProfile)(request.session.user);
    }
};
exports.SessionStrategy = SessionStrategy;
exports.SessionStrategy = SessionStrategy = tslib_1.__decorate([
    (0, core_1.injectable)(authentication_1.asAuthStrategy),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], SessionStrategy);
//# sourceMappingURL=session.js.map