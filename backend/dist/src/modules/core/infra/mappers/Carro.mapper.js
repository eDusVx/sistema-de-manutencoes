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
exports.CarroMapper = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Carros_model_1 = require("../models/Carros.model");
const Carros_1 = require("../../domain/Carros");
const Usuario_mapper_1 = require("./Usuario.mapper");
const Manutencoes_mapper_1 = require("./Manutencoes.mapper");
let CarroMapper = class CarroMapper {
    constructor(carroModel, usuarioMapper, manutencoesMapper) {
        this.carroModel = carroModel;
        this.usuarioMapper = usuarioMapper;
        this.manutencoesMapper = manutencoesMapper;
        this.logger = new common_1.Logger('CarroMapper');
    }
    modelToDomain(carroModel) {
        const manutencoes = [];
        if (carroModel.manutencoes) {
            carroModel.manutencoes.map((c) => {
                const manutencao = this.manutencoesMapper.modelToDomain(c);
                manutencoes.push(manutencao);
            });
        }
        const usuario = this.usuarioMapper.modelToDomain(carroModel.usuario);
        const carro = Carros_1.Carros.carregar({
            marca: carroModel.marca,
            modelo: carroModel.modelo,
            ano: carroModel.ano,
            usuario: usuario,
            manutencoes: manutencoes,
        }, carroModel.id);
        return carro;
    }
    async domainToModel(carro) {
        try {
            const manutencoesModel = [];
            if (carro.getManutencoes()) {
                await Promise.all(carro.getManutencoes().map(async (m) => {
                    const manutencaoModel = await this.manutencoesMapper.domainToModel(m, carro.getId());
                    manutencoesModel.push(manutencaoModel);
                }));
            }
            const usuarioModel = await this.usuarioMapper.domainToModel(carro.getUsuario());
            const carroModel = this.carroModel.create({
                id: carro.getId(),
                marca: carro.getMarca(),
                modelo: carro.getModelo(),
                ano: carro.getAno(),
                usuario: usuarioModel,
                manutencoes: manutencoesModel,
            });
            return carroModel;
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
CarroMapper = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Carros_model_1.CarrosModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        Usuario_mapper_1.UsuarioMapper,
        Manutencoes_mapper_1.ManutencoesMapper])
], CarroMapper);
exports.CarroMapper = CarroMapper;
//# sourceMappingURL=Carro.mapper.js.map