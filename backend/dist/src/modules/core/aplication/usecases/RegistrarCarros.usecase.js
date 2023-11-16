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
exports.RegistrarCarroUseCase = void 0;
const common_1 = require("@nestjs/common");
const Carros_1 = require("../../domain/Carros");
let RegistrarCarroUseCase = class RegistrarCarroUseCase {
    constructor(carroRepository, usuarioRepository) {
        this.carroRepository = carroRepository;
        this.usuarioRepository = usuarioRepository;
        this.logger = new common_1.Logger('RegistrarCarroUseCase');
    }
    async execute(request) {
        try {
            const buscarUsuarios = await this.usuarioRepository.searchUsuario(request.usuarioId);
            const carro = Carros_1.Carros.create({
                marca: request.marca,
                modelo: request.modelo,
                ano: request.ano,
                usuario: buscarUsuarios,
                manutencoes: [],
            });
            await this.carroRepository.saveCarro(carro);
            return `Carro ${request.modelo} de id ${carro.getId()} registrado com sucesso!`;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
};
RegistrarCarroUseCase = __decorate([
    __param(0, (0, common_1.Inject)('CarroRepository')),
    __param(1, (0, common_1.Inject)('UsuarioRepository')),
    __metadata("design:paramtypes", [Object, Object])
], RegistrarCarroUseCase);
exports.RegistrarCarroUseCase = RegistrarCarroUseCase;
//# sourceMappingURL=RegistrarCarros.usecase.js.map