using System;
using MODULOCLIENTE.Models;
using System.Collections.Generic;

namespace MODULOCLIENTE.Models
{
    public class MetodoPago
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public string? Tipo { get; set; }    // e.g., Tarjeta, PayPal
        public string? NumeroDeTarjeta { get; set; }
        public DateTime FechaExpiracion { get; set; }
        public string? Detalles { get; set; }
        public Cliente? Cliente { get; set; }
        public Verificacion? Verificacion { get; set; }

    }
}