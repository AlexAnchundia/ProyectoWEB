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
exports.Reclamo = void 0;
const typeorm_1 = require("typeorm");
const MetodoPago_1 = require("./MetodoPago");
const Verificacion_1 = require("./Verificacion");
const Notificacion_1 = require("./Notificacion");
let Reclamo = class Reclamo {
};
exports.Reclamo = Reclamo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reclamo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reclamo.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Reclamo.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MetodoPago_1.MetodoPago, metodo => metodo.reclamos),
    __metadata("design:type", MetodoPago_1.MetodoPago)
], Reclamo.prototype, "metodoPago", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Verificacion_1.Verificacion, verif => verif.reclamo),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Verificacion_1.Verificacion)
], Reclamo.prototype, "verificacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Notificacion_1.Notificacion, noti => noti.reclamo),
    __metadata("design:type", Array)
], Reclamo.prototype, "notificaciones", void 0);
exports.Reclamo = Reclamo = __decorate([
    (0, typeorm_1.Entity)()
], Reclamo);
