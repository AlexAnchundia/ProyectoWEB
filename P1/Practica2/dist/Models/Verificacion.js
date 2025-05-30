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
exports.Verificacion = void 0;
const typeorm_1 = require("typeorm");
const Reclamo_1 = require("./Reclamo");
const HistorialAcceso_1 = require("./HistorialAcceso");
let Verificacion = class Verificacion {
};
exports.Verificacion = Verificacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Verificacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Verificacion.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Reclamo_1.Reclamo, (reclamo) => reclamo.verificacion),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Reclamo_1.Reclamo)
], Verificacion.prototype, "reclamo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HistorialAcceso_1.HistorialAcceso, (acceso) => acceso.verificacion),
    __metadata("design:type", Array)
], Verificacion.prototype, "accesos", void 0);
exports.Verificacion = Verificacion = __decorate([
    (0, typeorm_1.Entity)()
], Verificacion);
