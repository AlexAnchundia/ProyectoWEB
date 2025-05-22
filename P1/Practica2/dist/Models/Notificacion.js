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
exports.Notificacion = void 0;
const typeorm_1 = require("typeorm");
const Reclamo_1 = require("./Reclamo");
let Notificacion = class Notificacion {
};
exports.Notificacion = Notificacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Notificacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Notificacion.prototype, "mensaje", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Notificacion.prototype, "enviadaEn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Reclamo_1.Reclamo, (reclamo) => reclamo.notificaciones),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Reclamo_1.Reclamo)
], Notificacion.prototype, "reclamo", void 0);
exports.Notificacion = Notificacion = __decorate([
    (0, typeorm_1.Entity)()
], Notificacion);
