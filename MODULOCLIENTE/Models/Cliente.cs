using System;
using MODULOCLIENTE.Models;
using System.Collections.Generic;

namespace MODULOCLIENTE.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public required string Nombre { get; set; }
        public required string Apellido { get; set; }
        public required string CorreElectronico { get; set; }
        public required string Telefono { get; set; }
        public required string TipoDeLicencia { get; set; }
        //RELACIONES4
        public ICollection<Verificacion> Verificaciones { get; set; }
        public ICollection<MetodoPago> MetodosPago { get; set; }
        public ICollection<Notificacion> Notificaciones { get; set; }
        public ICollection<EvaluacionCliente> Evaluaciones { get; set; }
        public ICollection<HistorialAlquiler> HistorialAlquileres { get; set; }
        public ICollection<HistorialAcceso> HistorialAccesos { get; set; }
        public ICollection<Reclamo> Reclamos { get; set; }
        public Cliente()
        {
            Verificaciones = new List<Verificacion>();
            MetodosPago = new List<MetodoPago>();
            Notificaciones = new List<Notificacion>();
            Evaluaciones = new List<EvaluacionCliente>();
            HistorialAlquileres = new List<HistorialAlquiler>();
            HistorialAccesos = new List<HistorialAcceso>();
            Reclamos = new List<Reclamo>();
        }
    }
}