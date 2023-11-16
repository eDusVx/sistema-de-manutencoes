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
exports.RegistrarManutencoesCarroUseCase = void 0;
const common_1 = require("@nestjs/common");
const Manutencoes_1 = require("../../domain/Manutencoes");
const Solucoes_1 = require("../../domain/Solucoes");
let RegistrarManutencoesCarroUseCase = class RegistrarManutencoesCarroUseCase {
    constructor(carroRepository) {
        this.carroRepository = carroRepository;
        this.logger = new common_1.Logger('RegistrarManutencaoUseCase');
    }
    async execute(request) {
        try {
            const buscarCarro = await this.carroRepository.searchCarro(request.idcarro);
            const solucoesDomain = Solucoes_1.Solucoes.create({
                descricao: request.solucoes.descricao,
                gastos: request.solucoes.gastos,
            });
            const manutencoesDomain = Manutencoes_1.Manutencoes.create({
                descricao: request.descricao,
                solucoes: solucoesDomain,
                data: new Date(),
            });
            buscarCarro.registrarManutencao(manutencoesDomain);
            await this.carroRepository.saveCarro(buscarCarro);
            this.logger.debug(`Manutenção ${request.descricao} para o carro ${request.idcarro} registrada com sucesso!`);
            return `Manutenção ${request.descricao} para o carro ${request.idcarro} registrada com sucesso!`;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
};
RegistrarManutencoesCarroUseCase = __decorate([
    __param(0, (0, common_1.Inject)('CarroRepository')),
    __metadata("design:paramtypes", [Object])
], RegistrarManutencoesCarroUseCase);
exports.RegistrarManutencoesCarroUseCase = RegistrarManutencoesCarroUseCase;
//# sourceMappingURL=RegistrarManutencoesCarros.usecase.js.map