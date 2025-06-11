using System;
using System.Collections.Generic;
using System.Linq;
using MODULOCLIENTE.Models;

namespace MODULOCLIENTE.Data
{
    public static class SeedData
    {
        public static void Inicializar(DataBase context)
        {
            if (!context.Clientes.Any())
            {
                var clientes = new List<Cliente>
                {
                    new Cliente {
                        Nombre = "Ana",
                        Apellido = "Gómez",
                        CorreoElectronico = "ana@mail.com",
                        Telefono = "0999888777",
                        TipoDeLicencia = "Tipo B"
                    },
                    new Cliente {
                        Nombre = "Luis",
                        Apellido = "Martínez",
                        CorreoElectronico = "luis@mail.com",
                        Telefono = "0988777666",
                        TipoDeLicencia = "Tipo C"
                    }
                };
                context.Clientes.AddRange(clientes);
                context.SaveChanges();
            }

            if (!context.MetodosPago.Any())
            {
                var ana = context.Clientes.First(c => c.Nombre == "Ana");
                var luis = context.Clientes.First(c => c.Nombre == "Luis");

                var metodosPago = new List<MetodoPago>
                {
                    new MetodoPago { Tipo = "Tarjeta de Crédito", ClienteId = ana.Id },
                    new MetodoPago { Tipo = "Transferencia Bancaria", ClienteId = luis.Id },
                    new MetodoPago { Tipo = "PayPal", ClienteId = ana.Id }
                };
                context.MetodosPago.AddRange(metodosPago);
                context.SaveChanges();
            }
        }
    }
}
