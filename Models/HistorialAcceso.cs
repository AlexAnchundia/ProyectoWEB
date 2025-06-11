using System;
using MODULOCLIENTE.Models;
using System.Collections.Generic;

namespace MODULOCLIENTE.Models
{
    public class HistorialAcceso
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public string? Diapositivo { get; set; }
        public string? DireccionIp { get; set; }
        public DateTime FechaAcesso { get; set; }
        public string? DetallesAcesso { get; set; }
        public Cliente? Cliente { get; set; }
    }
}
