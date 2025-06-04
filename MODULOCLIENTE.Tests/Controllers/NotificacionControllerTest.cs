using Xunit;
using MODULOCLIENTE.Controllers;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MODULOCLIENTE.Tests.Controllers
{
    public class NotificacionControllerTests
    {
        [Fact]
        public async Task GetNotificacion_ReturnsNotificacion_WhenIdExists()
        {
            var options = new DbContextOptionsBuilder<DataBase>()
                .UseInMemoryDatabase(databaseName: "TestDbNotificacion")
                .Options;

            using var context = new DataBase(options);
            var notificacion = new Notificacion { Id = 1, Mensaje = "Hola" };
            context.Notificacions.Add(notificacion);
            await context.SaveChangesAsync();

            var controller = new NotificacionController(context);
            var result = await controller.GetNotificacion(1);

            Assert.NotNull(result);
            Assert.Equal("Hola", result.Value.Mensaje);
        }
    }
}
