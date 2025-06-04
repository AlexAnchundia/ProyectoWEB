using Xunit;
using MODULOCLIENTE.Controllers;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MODULOCLIENTE.Tests.Controllers
{
    public class VerificacionControllerTests
    {
        [Fact]
        public async Task GetVerificacion_ReturnsVerificacion_WhenIdExists()
        {
            var options = new DbContextOptionsBuilder<DataBase>()
                .UseInMemoryDatabase(databaseName: "TestDbVerificacion")
                .Options;

            using var context = new DataBase(options);
            var verificacion = new Verificacion { Id = 1, Estado = "Aprobado" };
            context.Verificacions.Add(verificacion);
            await context.SaveChangesAsync();

            var controller = new VerificacionController(context);
            var result = await controller.GetVerificacion(1);

            Assert.NotNull(result);
            Assert.Equal("Aprobado", result.Value.Estado);
        }
    }
}
