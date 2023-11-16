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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosModel = void 0;
const typeorm_1 = require("typeorm");
const Carros_model_1 = require("./Carros.model");
let UsuariosModel = class UsuariosModel {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Cpf', nullable: false }),
    __metadata("design:type", String)
], UsuariosModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', nullable: false }),
    __metadata("design:type", String)
], UsuariosModel.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', nullable: false }),
    __metadata("design:type", String)
], UsuariosModel.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'senha', nullable: false }),
    __metadata("design:type", String)
], UsuariosModel.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Carros_model_1.CarrosModel, (carro) => carro.usuario, {
        nullable: true,
    }),
    __metadata("design:type", Carros_model_1.CarrosModel)
], UsuariosModel.prototype, "carros", void 0);
UsuariosModel = __decorate([
    (0, typeorm_1.Entity)()
], UsuariosModel);
exports.UsuariosModel = UsuariosModel;
//# sourceMappingURL=Usuario.model.js.map