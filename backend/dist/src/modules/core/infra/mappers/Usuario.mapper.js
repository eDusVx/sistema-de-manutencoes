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
exports.UsuarioMapper = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Usuario_model_1 = require("../models/Usuario.model");
const Usuario_1 = require("../../domain/Usuario");
let UsuarioMapper = class UsuarioMapper {
    constructor(usuarioModel) {
        this.usuarioModel = usuarioModel;
        this.logger = new common_1.Logger('UsuarioMapper');
    }
    modelToDomain(usuarioModel) {
        const usuario = Usuario_1.Usuario.create({
            nome: usuarioModel.nome,
            email: usuarioModel.email,
            senha: usuarioModel.senha,
        }, usuarioModel.id);
        return usuario;
    }
    async domainToModel(usuario) {
        try {
            const usuarioModel = this.usuarioModel.create({
                id: usuario.getCPF(),
                nome: usuario.getNome(),
                email: usuario.getEmail(),
                senha: usuario.getSenha(),
            });
            await this.usuarioModel.save(usuarioModel);
            return usuarioModel;
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
UsuarioMapper = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Usuario_model_1.UsuariosModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioMapper);
exports.UsuarioMapper = UsuarioMapper;
//# sourceMappingURL=Usuario.mapper.js.map