using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace MODULOCLIENTE.Data
{
    /// <summary>
    /// Factory para EF Core en tiempo de diseño.
    /// </summary>
    public class DataBase : DbContext
    {
        // Constructor principal inyectado por DI
        public DataBase(DbContextOptions<DataBase> options) : base(options) { }

        // Constructor sin parámetros para tiempo de diseño (fallback)
        public DataBase() { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Verificacion> Verificaciones { get; set; }
        public DbSet<MetodoPago> MetodosPago { get; set; }
        public DbSet<Reclamo> Reclamos { get; set; }
        public DbSet<Notificacion> Notificaciones { get; set; }
        public DbSet<EvaluacionCliente> Evaluaciones { get; set; }
        public DbSet<HistorialAlquiler> HistorialAlquileres { get; set; }
        public DbSet<HistorialAcceso> HistorialAccesos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Si no está configurado (migraciones en diseño), usar la cadena de conexión por defecto
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Host=basedatosclientes.postgres.database.azure.com;Port=5432;Database=postgres;Username=moduloadmin@basedatosclientes;Password=ClienteDb#2024;SslMode=Require;Trust Server Certificate=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Cliente>()
                .HasMany(c => c.Verificaciones)
                .WithOne(v => v.Cliente)
                .HasForeignKey(v => v.ClienteId);

            modelBuilder.Entity<Cliente>()
                .HasMany(c => c.MetodosPago)
                .WithOne(m => m.Cliente)
                .HasForeignKey(m => m.ClienteId);

            modelBuilder.Entity<Cliente>()
                .HasMany(c => c.Reclamos)
                .WithOne(r => r.Cliente)
                .HasForeignKey(r => r.ClienteId);

            modelBuilder.Entity<Cliente>()
                .HasMany(c => c.Notificaciones)
                .WithOne(n => n.Cliente)
                .HasForeignKey(n => n.ClienteId);

            modelBuilder.Entity<Cliente>()
                .HasMany(c => c.Evaluaciones)
                .WithOne(e => e.Cliente)
                .HasForeignKey(e => e.ClienteId);

            modelBuilder.Entity<Cliente>()
                .HasMany(c => c.HistorialAlquileres)
                .WithOne(h => h.Cliente)
                .HasForeignKey(h => h.ClienteId);

            modelBuilder.Entity<Cliente>()
                .HasMany(c => c.HistorialAccesos)
                .WithOne(h => h.Cliente)
                .HasForeignKey(h => h.ClienteId);
        }
    }
}
}
