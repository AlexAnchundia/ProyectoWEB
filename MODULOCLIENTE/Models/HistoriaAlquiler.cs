using System;
using MODULOCLIENTE.Models;
using System.Collections.Generic;

namespace MODULOCLIENTE.Models
{
        public class HistorialAlquiler
    {
        public int id { get; set; }
        public int ClienteId { get; set; }
        public DateTime FechaAlquiler { get; set; }
        public DateTime FechaDevolucion { get; set; }
        public string? DetallesVehiculo { get; set; }
        public Cliente? Cliente { get; set; }

    }
}