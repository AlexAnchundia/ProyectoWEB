using Xunit;
using MODULOCLIENTE.Controllers;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MODULOCLIENTE.Tests.Controllers
{
    public class HistorialAlquilerControllerTests
    {
        [Fact]
        public async Task GetHistorialAlquiler_ReturnsRegistro_WhenIdExists()
        {
            var options = new DbContextOptionsBuilder<DataBase>()
                .UseInMemoryDatabase(databaseName: "TestDbAlquiler")
                .Options;

            using var context = new DataBase(options);
            var historial = new HistorialAlquiler { Id = 1, ClienteId = 1, FechaAlquiler = System.DateTime.Now };
            context.HistorialAlquilers.Add(historial);
            await context.SaveChangesAsync();

            var controller = new HistorialAlquilerController(context);
            var result = await controller.GetHistorialAlquiler(1);

            Assert.NotNull(result);
            Assert.Equal(1, result.Value.ClienteId);
        }
    }
}
