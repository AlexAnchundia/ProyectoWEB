using Xunit;
using MODULOCLIENTE.Controllers;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MODULOCLIENTE.Tests.Controllers
{
    public class EvaluacionClienteControllerTests
    {
        [Fact]
        public async Task GetEvaluacion_ReturnsEvaluacion_WhenIdExists()
        {
            var options = new DbContextOptionsBuilder<DataBase>()
                .UseInMemoryDatabase(databaseName: "TestDbEvaluacion")
                .Options;

            using var context = new DataBase(options);
            var eval = new EvaluacionCliente { Id = 1, Comentario = "Bien", Calificacion = 5 };
            context.EvaluacionClientes.Add(eval);
            await context.SaveChangesAsync();

            var controller = new EvaluacionClienteController(context);
            var result = await controller.GetEvaluacionCliente(1);

            Assert.NotNull(result);
            Assert.Equal("Bien", result.Value.Comentario);
        }
    }
}
