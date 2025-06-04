using Xunit;
using MODULOCLIENTE.Controllers;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MODULOCLIENTE.Tests.Controllers
{
    public class ClientesControllerTests
    {
        [Fact]
        public async Task GetCliente_ReturnsCliente_WhenIdExists()
        {
            var options = new DbContextOptionsBuilder<DataBase>()
                .UseInMemoryDatabase(databaseName: "TestDb")
                .Options;

            // Crear contexto de prueba con datos
            using var context = new DataBase(options);
            var cliente = new Cliente { Id = 1, Nombre = "Ana", Apellido = "Lopez", CorreoElectronico = "ana@example.com", TipoDeLicencia = "A" };
            context.Clientes.Add(cliente);
            await context.SaveChangesAsync();

            // Crear controlador usando contexto de prueba
            var controller = new ClientesController(context);

            // Ejecutar método que quieres probar
            var result = await controller.GetCliente(1);

            // Validar resultado
            Assert.NotNull(result);
            Assert.Equal("Ana", result.Value.Nombre);
        }
    }
}
