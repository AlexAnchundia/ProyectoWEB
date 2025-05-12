using System;
using MODULOCLIENTE.Models;
using System.Collections.Generic;

namespace MODULOCLIENTE.Models
{
    public class Notificacion
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public string? Titulo { get; set; }
        public string? Mensaje { get; set; }
        public DateTime FechaNotificacion { get; set; }
        public bool Leida { get; set; } // Indica si la notificación ha sido leída por el cliente
        public Cliente? Cliente { get; set; }
    }
}