using System;
using MODULOCLIENTE.Models;
using System.Collections.Generic;

namespace MODULOCLIENTE.Models
{
    public class Reclamo
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public string? Titutlo { get; set; }
        public string? Descripcion { get; set; }
        public DateTime FechaReclamo { get; set; }
        public string? Estado { get; set; }  // e.g., Pendiente, Resuelto
        public Cliente? Cliente { get; set; }
    }
}