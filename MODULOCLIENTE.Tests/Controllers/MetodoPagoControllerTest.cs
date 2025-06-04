using Xunit;
using MODULOCLIENTE.Controllers;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MODULOCLIENTE.Tests.Controllers
{
    public class MetodoPagoControllerTests
    {
        [Fact]
        public async Task GetMetodoPago_ReturnsMetodo_WhenIdExists()
        {
            var options = new DbContextOptionsBuilder<DataBase>()
                .UseInMemoryDatabase(databaseName: "TestDbMetodoPago")
                .Options;

            using var context = new DataBase(options);
            var metodo = new MetodoPago { Id = 1, Tipo = "Tarjeta" };
            context.MetodoPagos.Add(metodo);
            await context.SaveChangesAsync();

            var controller = new MetodoPagoController(context);
            var result = await controller.GetMetodoPago(1);

            Assert.NotNull(result);
            Assert.Equal("Tarjeta", result.Value.Tipo);
        }
    }
}
