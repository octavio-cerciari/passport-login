"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCredentials = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_model_1 = require("./user.model");
let UserCredentials = class UserCredentials extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.UserCredentials = UserCredentials;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserCredentials.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        hidden: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserCredentials.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => user_model_1.User),
    tslib_1.__metadata("design:type", Number)
], UserCredentials.prototype, "userId", void 0);
exports.UserCredentials = UserCredentials = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserCredentials);
//# sourceMappingURL=user-credentials.model.js.map