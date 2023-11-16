"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseConnection = void 0;
exports.DataBaseConnection = {
    type: 'sqlite',
    database: 'db.sqlite',
    entities: ['dist/**/*.model{.ts,.js}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map