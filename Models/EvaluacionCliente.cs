using System;
using MODULOCLIENTE.Models;
using System.Collections.Generic;

namespace MODULOCLIENTE.Models
{
    public class EvaluacionCliente
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public DateTime FechaEvaluacion { get; set; }
        public int Puntuacion { get; set; }
        public string? Comentario { get; set; }
        public Cliente? Cliente { get; set; }

    }
}