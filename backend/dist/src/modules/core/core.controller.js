"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreController = void 0;
const common_1 = require("@nestjs/common");
const RegistrarUsuario_usecase_1 = require("./aplication/usecases/RegistrarUsuario.usecase");
const RegistrarCarros_usecase_1 = require("./aplication/usecases/RegistrarCarros.usecase");
const BuscarCarros_query_1 = require("./aplication/queries/BuscarCarros.query");
const DeletarCarros_usecase_1 = require("./aplication/usecases/DeletarCarros.usecase");
const RegistrarManutencoesCarros_usecase_1 = require("./aplication/usecases/RegistrarManutencoesCarros.usecase");
let CoreController = class CoreController {
    constructor(registrarUsuarioUseCase, registrarCarroUseCase, buscarCarrosQuery, deletarCarroUseCase, registrarManutencaoUseCase) {
        this.registrarUsuarioUseCase = registrarUsuarioUseCase;
        this.registrarCarroUseCase = registrarCarroUseCase;
        this.buscarCarrosQuery = buscarCarrosQuery;
        this.deletarCarroUseCase = deletarCarroUseCase;
        this.registrarManutencaoUseCase = registrarManutencaoUseCase;
        this.logger = new common_1.Logger('CoreController');
    }
    async registrarUsuario(request) {
        try {
            const response = await this.registrarUsuarioUseCase.execute(request);
            return response;
        }
        catch (e) {
            this.logger.error(e);
            return e.message;
        }
    }
    async registrarCarro(request) {
        try {
            const response = await this.registrarCarroUseCase.execute(request);
            return response;
        }
        catch (e) {
            this.logger.error(e);
            return e.message;
        }
    }
    async BuscarCarros(request) {
        try {
            const response = await this.buscarCarrosQuery.execute(request);
            return response;
        }
        catch (e) {
            this.logger.error(e);
            return e.message;
        }
    }
    async deletarCarro(request) {
        try {
            const response = await this.deletarCarroUseCase.execute(request);
            return response;
        }
        catch (e) {
            this.logger.error(e);
            return e.message;
        }
    }
    async registrarManutencao(request) {
        try {
            const response = await this.registrarManutencaoUseCase.execute(request);
            return response;
        }
        catch (e) {
            this.logger.error(e);
            return e.message;
        }
    }
};
__decorate([
    (0, common_1.Post)('registrar-usuario'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoreController.prototype, "registrarUsuario", null);
__decorate([
    (0, common_1.Post)('registrar-carro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoreController.prototype, "registrarCarro", null);
__decorate([
    (0, common_1.Get)('buscar-carro'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoreController.prototype, "BuscarCarros", null);
__decorate([
    (0, common_1.Post)('deletar-carro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoreController.prototype, "deletarCarro", null);
__decorate([
    (0, common_1.Post)('registrar-manutencao'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoreController.prototype, "registrarManutencao", null);
CoreController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [RegistrarUsuario_usecase_1.RegistrarUsuarioUseCase,
        RegistrarCarros_usecase_1.RegistrarCarroUseCase,
        BuscarCarros_query_1.BuscarCarrosQuery,
        DeletarCarros_usecase_1.DeletarCarroUseCase,
        RegistrarManutencoesCarros_usecase_1.RegistrarManutencoesCarroUseCase])
], CoreController);
exports.CoreController = CoreController;
//# sourceMappingURL=core.controller.js.map