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
exports.ManutencoesModel = void 0;
const typeorm_1 = require("typeorm");
const Carros_model_1 = require("./Carros.model");
const Solucoes_model_1 = require("./Solucoes.model");
let ManutencoesModel = class ManutencoesModel {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id', nullable: false }),
    __metadata("design:type", Number)
], ManutencoesModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descricao', nullable: false }),
    __metadata("design:type", String)
], ManutencoesModel.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        name: 'data',
    }),
    __metadata("design:type", String)
], ManutencoesModel.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Carros_model_1.CarrosModel),
    __metadata("design:type", Carros_model_1.CarrosModel)
], ManutencoesModel.prototype, "carro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Solucoes_model_1.SolucoesModel),
    (0, typeorm_1.JoinColumn)({ name: 'solucoes_id', referencedColumnName: 'id' }),
    __metadata("design:type", Solucoes_model_1.SolucoesModel)
], ManutencoesModel.prototype, "solucoes", void 0);
ManutencoesModel = __decorate([
    (0, typeorm_1.Entity)()
], ManutencoesModel);
exports.ManutencoesModel = ManutencoesModel;
//# sourceMappingURL=Manutencoes.model.js.map