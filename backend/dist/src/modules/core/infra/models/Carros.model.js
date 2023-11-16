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
exports.CarrosModel = void 0;
const typeorm_1 = require("typeorm");
const Usuario_model_1 = require("./Usuario.model");
const Manutencoes_model_1 = require("./Manutencoes.model");
let CarrosModel = class CarrosModel {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id', nullable: false }),
    __metadata("design:type", Number)
], CarrosModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'marca', nullable: false }),
    __metadata("design:type", String)
], CarrosModel.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'modelo', nullable: false }),
    __metadata("design:type", String)
], CarrosModel.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ano', nullable: false }),
    __metadata("design:type", String)
], CarrosModel.prototype, "ano", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_model_1.UsuariosModel, (usuario) => usuario.carros),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id', referencedColumnName: 'id' }),
    __metadata("design:type", Usuario_model_1.UsuariosModel)
], CarrosModel.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Manutencoes_model_1.ManutencoesModel, (manutencao) => manutencao.carro),
    __metadata("design:type", Array)
], CarrosModel.prototype, "manutencoes", void 0);
CarrosModel = __decorate([
    (0, typeorm_1.Entity)()
], CarrosModel);
exports.CarrosModel = CarrosModel;
//# sourceMappingURL=Carros.model.js.map