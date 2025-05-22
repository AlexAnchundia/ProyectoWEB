using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // 1) Configurar DbContext con PostgreSQL (cadena en appsettings.json)
        builder.Services.AddDbContext<DataBase>(options =>
            options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

        // 2) Agregar servicios para Swagger y controllers
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddControllers();

        var app = builder.Build();

        // 3) Middleware HTTP
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        app.UseHttpsRedirection();

        // 4) Seed de datos al iniciar
        using (var scope = app.Services.CreateScope())
        {
            var db = scope.ServiceProvider.GetRequiredService<DataBase>();
            if (db.Database.CanConnect())
            {
                Console.WriteLine("✅ Conexión exitosa a PostgreSQL");
                SeedData.Inicializar(db);
            }
            else
            {
                Console.WriteLine("❌ No pude conectar a PostgreSQL");
            }
        }

        // 5) Montar controllers con atributos [ApiController]
        app.MapControllers();

        // 6) Endpoints de prueba (opcional)
        app.MapPost("/api/clientes/test-insert", async (DataBase db) =>
        {
            var cliente = new Cliente
            {
                Nombre = "Prueba",
                CorreoElectronico = "test@ej.com",
                Apellido = "Test",
                Telefono = "0001112222",
                TipoDeLicencia = "Tipo A"
            };
            db.Clientes.Add(cliente);
            await db.SaveChangesAsync();
            return Results.Ok(new { mensaje = "Insertado", id = cliente.Id });
        });

        app.MapGet("/api/clientes/test-get/{id}", async (int id, DataBase db) =>
        {
            var cliente = await db.Clientes.FindAsync(id);
            return cliente is not null ? Results.Ok(cliente) : Results.NotFound();
        });

        // 7) Endpoint existente de WeatherForecast
        app.MapGet("/weatherforecast", () =>
        {
            var summaries = new[]
            {
                "Freezing", "Bracing", "Chilly", "Cool", "Mild",
                "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
            };
            return Enumerable.Range(1, 5).Select(index =>
                new WeatherForecast(
                    DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                    Random.Shared.Next(-20, 55),
                    summaries[Random.Shared.Next(summaries.Length)]
                )).ToArray();
        })
        .WithName("GetWeatherForecast");

        // 8) Ejecutar la aplicación
        app.Run();
    }
}

public record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
