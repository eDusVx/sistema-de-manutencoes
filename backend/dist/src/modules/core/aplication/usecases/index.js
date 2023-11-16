"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usecases = void 0;
const DeletarCarros_usecase_1 = require("./DeletarCarros.usecase");
const RegistrarCarros_usecase_1 = require("./RegistrarCarros.usecase");
const RegistrarManutencoesCarros_usecase_1 = require("./RegistrarManutencoesCarros.usecase");
const RegistrarUsuario_usecase_1 = require("./RegistrarUsuario.usecase");
exports.usecases = [
    RegistrarUsuario_usecase_1.RegistrarUsuarioUseCase,
    RegistrarCarros_usecase_1.RegistrarCarroUseCase,
    DeletarCarros_usecase_1.DeletarCarroUseCase,
    RegistrarManutencoesCarros_usecase_1.RegistrarManutencoesCarroUseCase,
];
//# sourceMappingURL=index.js.map