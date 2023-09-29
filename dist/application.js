"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2LoginApplication = void 0;
const authentication_1 = require("@loopback/authentication");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_crud_1 = require("@loopback/rest-crud");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const sequence_1 = require("./sequence");
class OAuth2LoginApplication extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.component(rest_explorer_1.RestExplorerComponent);
        this.component(authentication_1.AuthenticationComponent);
        this.component(rest_crud_1.CrudRestComponent);
        this.sequence(sequence_1.MySequence);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}
exports.OAuth2LoginApplication = OAuth2LoginApplication;
//# sourceMappingURL=application.js.map