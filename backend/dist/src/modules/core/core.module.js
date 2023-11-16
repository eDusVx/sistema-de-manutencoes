"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const core_controller_1 = require("./core.controller");
const mappers_1 = require("./infra/mappers");
const usecases_1 = require("./aplication/usecases");
const Usuario_repository_1 = require("./infra/repositories/Usuario.repository");
const Usuario_model_1 = require("./infra/models/Usuario.model");
const typeorm_1 = require("@nestjs/typeorm");
const Carros_model_1 = require("./infra/models/Carros.model");
const Manutencoes_model_1 = require("./infra/models/Manutencoes.model");
const Solucoes_model_1 = require("./infra/models/Solucoes.model");
const Carro_repository_1 = require("./infra/repositories/Carro.repository");
const queries_1 = require("./aplication/queries");
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Usuario_model_1.UsuariosModel,
                Carros_model_1.CarrosModel,
                Manutencoes_model_1.ManutencoesModel,
                Solucoes_model_1.SolucoesModel,
            ]),
        ],
        controllers: [core_controller_1.CoreController],
        providers: [
            ...mappers_1.mappers,
            ...usecases_1.usecases,
            ...queries_1.queries,
            {
                provide: 'UsuarioRepository',
                useClass: Usuario_repository_1.UsuarioRepositoryImpl,
            },
            {
                provide: 'CarroRepository',
                useClass: Carro_repository_1.CarroRepositoryImpl,
            },
        ],
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map