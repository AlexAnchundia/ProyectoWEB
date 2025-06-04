using Xunit;
using MODULOCLIENTE.Controllers;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MODULOCLIENTE.Tests.Controllers
{
    public class HistorialAccesoControllerTests
    {
        [Fact]
        public async Task GetHistorialAcceso_ReturnsRegistro_WhenIdExists()
        {
            var options = new DbContextOptionsBuilder<DataBase>()
                .UseInMemoryDatabase(databaseName: "TestDbAcceso")
                .Options;

            using var context = new DataBase(options);
            var historial = new HistorialAcceso { Id = 1, Usuario = "usuario1", FechaAcceso = System.DateTime.Now };
            context.HistorialAccesos.Add(historial);
            await context.SaveChangesAsync();

            var controller = new HistorialAccesoController(context);
            var result = await controller.GetHistorialAcceso(1);

            Assert.NotNull(result);
            Assert.Equal("usuario1", result.Value.Usuario);
        }
    }
}
