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
exports.UsuarioRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Usuario_model_1 = require("../models/Usuario.model");
const Usuario_mapper_1 = require("../mappers/Usuario.mapper");
let UsuarioRepositoryImpl = class UsuarioRepositoryImpl {
    constructor(usuarioModel, usuarioMapper) {
        this.usuarioModel = usuarioModel;
        this.usuarioMapper = usuarioMapper;
        this.logger = new common_1.Logger('UsuarioRepository');
    }
    async saveUsuario(usuario) {
        try {
            const usuarioModelResult = await this.usuarioMapper.domainToModel(usuario);
            await this.usuarioModel.save(usuarioModelResult);
            return 'Usuário cadastrado com sucesso!';
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    async searchUsuario(id) {
        try {
            const usuarioeModel = await this.usuarioModel.findOne({
                where: { id: id },
            });
            const usuarioDomain = this.usuarioMapper.modelToDomain(usuarioeModel);
            return usuarioDomain;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
};
UsuarioRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Usuario_model_1.UsuariosModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        Usuario_mapper_1.UsuarioMapper])
], UsuarioRepositoryImpl);
exports.UsuarioRepositoryImpl = UsuarioRepositoryImpl;
//# sourceMappingURL=Usuario.repository.js.map