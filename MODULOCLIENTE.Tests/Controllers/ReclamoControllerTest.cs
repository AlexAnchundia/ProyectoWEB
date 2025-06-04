using Xunit;
using MODULOCLIENTE.Controllers;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MODULOCLIENTE.Tests.Controllers
{
    public class ReclamoControllerTests
    {
        [Fact]
        public async Task GetReclamo_ReturnsReclamo_WhenIdExists()
        {
            var options = new DbContextOptionsBuilder<DataBase>()
                .UseInMemoryDatabase(databaseName: "TestDbReclamo")
                .Options;

            using var context = new DataBase(options);
            var reclamo = new Reclamo { Id = 1, Descripcion = "Problema" };
            context.Reclamos.Add(reclamo);
            await context.SaveChangesAsync();

            var controller = new ReclamoController(context);
            var result = await controller.GetReclamo(1);

            Assert.NotNull(result);
            Assert.Equal("Problema", result.Value.Descripcion);
        }
    }
}
