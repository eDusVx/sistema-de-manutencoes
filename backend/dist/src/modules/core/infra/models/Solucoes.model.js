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
exports.SolucoesModel = void 0;
const typeorm_1 = require("typeorm");
const Manutencoes_model_1 = require("./Manutencoes.model");
let SolucoesModel = class SolucoesModel {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id', nullable: false }),
    __metadata("design:type", Number)
], SolucoesModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descricao', nullable: false }),
    __metadata("design:type", String)
], SolucoesModel.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gastos', nullable: false }),
    __metadata("design:type", Number)
], SolucoesModel.prototype, "gastos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Manutencoes_model_1.ManutencoesModel, (solucao) => solucao.solucoes, {}),
    __metadata("design:type", Manutencoes_model_1.ManutencoesModel)
], SolucoesModel.prototype, "manutencoes", void 0);
SolucoesModel = __decorate([
    (0, typeorm_1.Entity)()
], SolucoesModel);
exports.SolucoesModel = SolucoesModel;
//# sourceMappingURL=Solucoes.model.js.map