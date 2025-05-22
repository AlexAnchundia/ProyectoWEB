using System;
using MODULOCLIENTE.Models;
using System.Collections.Generic;

namespace MODULOCLIENTE.Models
{
    public class Verificacion
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public bool CorreoElectronicoVerificado { get; set; }
        public bool TelefonoVerificado { get; set; }
        public bool LicenciaVerificada { get; set; }
        public DateTime FechaVerificacion { get; set; }
        public Cliente? Cliente { get; set; }
    }
}
