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
exports.CarroRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Carros_model_1 = require("../models/Carros.model");
const Carro_mapper_1 = require("../mappers/Carro.mapper");
const Manutencoes_model_1 = require("../models/Manutencoes.model");
const Solucoes_model_1 = require("../models/Solucoes.model");
let CarroRepositoryImpl = class CarroRepositoryImpl {
    constructor(carroModel, solucoesModel, manutencoesModel, carroMapper) {
        this.carroModel = carroModel;
        this.solucoesModel = solucoesModel;
        this.manutencoesModel = manutencoesModel;
        this.carroMapper = carroMapper;
        this.logger = new common_1.Logger('CarroRepository');
    }
    async saveCarro(carro) {
        try {
            const carroModelResult = await this.carroMapper.domainToModel(carro);
            await this.carroModel.save(carroModelResult);
            return 'Usuário cadastrado com sucesso!';
        }
        catch (e) {
            this.logger.error('Erro ao converter domínio para modelo:', e);
            throw e;
        }
    }
    async searchCarro(id) {
        try {
            const carroModel = await this.carroModel.findOne({
                where: { id: id },
                relations: {
                    usuario: true,
                    manutencoes: { solucoes: true },
                },
            });
            const carroDomain = this.carroMapper.modelToDomain(carroModel);
            return carroDomain;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    async deletarCarro(id) {
        try {
            const carroModel = await this.carroModel.findOne({
                where: { id: id },
                relations: { manutencoes: { solucoes: true } },
            });
            if (carroModel) {
                await Promise.all(carroModel.manutencoes.map(async (m) => {
                    const solucao = m.solucoes;
                    await this.manutencoesModel.remove(m);
                    await this.solucoesModel.remove(solucao);
                }));
                await this.carroModel.remove(carroModel);
            }
            else {
                throw new Error(`Nenhum carro encontrado com id ${id}`);
            }
            return `Carro ${id} removido com sucesso!`;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
};
CarroRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Carros_model_1.CarrosModel)),
    __param(1, (0, typeorm_1.InjectRepository)(Solucoes_model_1.SolucoesModel)),
    __param(2, (0, typeorm_1.InjectRepository)(Manutencoes_model_1.ManutencoesModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        Carro_mapper_1.CarroMapper])
], CarroRepositoryImpl);
exports.CarroRepositoryImpl = CarroRepositoryImpl;
//# sourceMappingURL=Carro.repository.js.map