export interface MetodoPago {
    id: number;
    tipo: string;
    tipoMetodo: string
    nombreTitular: string
    numeroEnmascarado: string
    fechaVencimiento: Date
    direccionFacturacion: string
    monedaPreferida: string
    estado: string
}
