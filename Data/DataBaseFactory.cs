using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace MODULOCLIENTE.Data
{
    /// <summary>
    /// Factory para EF Core en tiempo de diseño.
    /// </summary>
    public class DataBaseFactory : IDesignTimeDbContextFactory<DataBase>
    {
        public DataBase CreateDbContext(string[] args)
        {
            // Construye configuración para leer appsettings.json
            IConfigurationRoot config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var builder = new DbContextOptionsBuilder<DataBase>();
            // Lee la cadena DefaultConnection
            var connStr = config.GetConnectionString("DefaultConnection");
            builder.UseNpgsql(connStr);

            return new DataBase(builder.Options);
        }
    }
}
