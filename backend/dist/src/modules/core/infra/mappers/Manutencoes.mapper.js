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
exports.ManutencoesMapper = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Manutencoes_model_1 = require("../models/Manutencoes.model");
const Manutencoes_1 = require("../../domain/Manutencoes");
const Solucoes_mapper_1 = require("./Solucoes.mapper");
const Solucoes_model_1 = require("../models/Solucoes.model");
const date_fns_tz_1 = require("date-fns-tz");
let ManutencoesMapper = class ManutencoesMapper {
    constructor(manutencoesModel, solucoesModel, solucoesMapper) {
        this.manutencoesModel = manutencoesModel;
        this.solucoesModel = solucoesModel;
        this.solucoesMapper = solucoesMapper;
        this.logger = new common_1.Logger('ManutencoesMapper');
    }
    modelToDomain(manutencoesModel) {
        const solucoes = this.solucoesMapper.modelToDomain(manutencoesModel.solucoes);
        const manutencoes = Manutencoes_1.Manutencoes.carregar({
            descricao: manutencoesModel.descricao,
            solucoes: solucoes,
            data: new Date(manutencoesModel.data),
        }, manutencoesModel.id);
        return manutencoes;
    }
    async domainToModel(manutencoes, carroId) {
        try {
            const solucoesModel = await this.solucoesMapper.domainToModel(manutencoes.getSolucoes());
            await this.solucoesModel.save(solucoesModel);
            const manutencaoModel = this.manutencoesModel.create({
                id: manutencoes.getId(),
                descricao: manutencoes.getDescricao(),
                solucoes: solucoesModel,
                data: (0, date_fns_tz_1.format)(manutencoes.getData(), 'yyyy-MM-dd HH:mm:ssXXX', {
                    timeZone: 'America/Sao_Paulo',
                }),
                carro: { id: carroId },
            });
            await this.manutencoesModel.save(manutencaoModel);
            return manutencaoModel;
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
ManutencoesMapper = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Manutencoes_model_1.ManutencoesModel)),
    __param(1, (0, typeorm_1.InjectRepository)(Solucoes_model_1.SolucoesModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        Solucoes_mapper_1.SolucoesMapper])
], ManutencoesMapper);
exports.ManutencoesMapper = ManutencoesMapper;
//# sourceMappingURL=Manutencoes.mapper.js.map