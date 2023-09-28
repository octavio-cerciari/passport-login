"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoredbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: process.env.DB || 'mongodb',
    connector: process.env.DB || 'mongodb',
    url: process.env.URL || '',
    host: process.env.HOST || '',
    port: process.env.DB_PORT || '',
    user: process.env.USER || '',
    password: process.env.PASSWORD || '',
    database: process.env.DB || 'mongodb',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let CoredbDataSource = class CoredbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.CoredbDataSource = CoredbDataSource;
CoredbDataSource.dataSourceName = 'mongodb';
CoredbDataSource.defaultConfig = config;
exports.CoredbDataSource = CoredbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.mongodb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], CoredbDataSource);
//# sourceMappingURL=db.datasource.js.map