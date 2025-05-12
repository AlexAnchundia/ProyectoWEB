using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;

var builder = WebApplication.CreateBuilder(args);

// Configurar DbContext con PostgreSQL (cadena en appsettings.json)
builder.Services.AddDbContext<DataBase>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Agregar servicios para Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Pipeline HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Verificar conexión a la base de datos al iniciar
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<DataBase>();
    Console.WriteLine(db.Database.CanConnect()
        ? "✅ Conexión exitosa a PostgreSQL"
        : "❌ No pude conectar a PostgreSQL");
}

// Endpoints de prueba para CRUD básico en Cliente
app.MapPost("/api/clientes/test-insert", async (DataBase db) =>
{
    var cliente = new Cliente { Nombre = "Prueba", Email = "test@ej.com" };
    db.Clientes.Add(cliente);
    await db.SaveChangesAsync();
    return Results.Ok(new { mensaje = "Insertado", id = cliente.Id });
});

app.MapGet("/api/clientes/test-get/{id}", async (int id, DataBase db) =>
{
    var cliente = await db.Clientes.FindAsync(id);
    return cliente is not null ? Results.Ok(cliente) : Results.NotFound();
});

// Endpoint existente de WeatherForecast
app.MapGet("/weatherforecast", () =>
{
    var summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast(
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        )).ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.Run();

public record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}