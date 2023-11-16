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
exports.SolucoesMapper = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Solucoes_model_1 = require("../models/Solucoes.model");
const Solucoes_1 = require("../../domain/Solucoes");
let SolucoesMapper = class SolucoesMapper {
    constructor(solucoesModel) {
        this.solucoesModel = solucoesModel;
        this.logger = new common_1.Logger('SolucoesMapper');
    }
    modelToDomain(solucoesModel) {
        const solucoes = Solucoes_1.Solucoes.carregar({
            descricao: solucoesModel.descricao,
            gastos: solucoesModel.gastos,
        }, solucoesModel.id);
        return solucoes;
    }
    async domainToModel(solucoes) {
        try {
            const solucoesModel = this.solucoesModel.create({
                id: solucoes.getId(),
                descricao: solucoes.getDescricao(),
                gastos: solucoes.getGastos(),
            });
            return solucoesModel;
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
SolucoesMapper = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Solucoes_model_1.SolucoesModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SolucoesMapper);
exports.SolucoesMapper = SolucoesMapper;
//# sourceMappingURL=Solucoes.mapper.js.map