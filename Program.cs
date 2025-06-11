using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models; // << Agregar para OpenApi
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // 1) Configurar DbContext con PostgreSQL
        builder.Services.AddDbContext<DataBase>(options =>
            options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

        // 2) Agregar servicios necesarios
        builder.Services.AddControllers()
            .AddNewtonsoftJson();
        builder.Services.AddEndpointsApiExplorer();

        // 3) Configurar Swagger con seguridad JWT
        builder.Services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "MODULOCLIENTE API", Version = "v1" });

            // Definir esquema de seguridad JWT Bearer
            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Description = "Ingrese 'Bearer' seguido del token JWT. Ejemplo: Bearer eyJhbGciOiJIUzI1NiIs...",
                Name = "Authorization",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.ApiKey,
                Scheme = "Bearer"
            });

            // Requerir el esquema de seguridad para todos los endpoints
            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference 
                        { 
                            Type = ReferenceType.SecurityScheme, 
                            Id = "Bearer" 
                        },
                        Scheme = "oauth2",
                        Name = "Bearer",
                        In = ParameterLocation.Header,

                    },
                    new List<string>()
                }
            });
        });

        // 4) Configurar JWT Authentication
        var key = "clave-super-secreta-recontra-larga-1234567890!!"; // Cambiar en producción
        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
                };
            });

        var app = builder.Build();

        // 5) Middleware
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthentication(); // 👈 Esto debe ir antes de UseAuthorization
        app.UseAuthorization();

        // 6) Inicializar base de datos
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
                Console.WriteLine("❌ No se pudo conectar a PostgreSQL");
            }
        }

        // 7) Mapear controladores
        app.MapControllers();

        // 8) Rutas de prueba opcionales
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

        // 9) Ejecutar app
        app.Run();
    }
}

public record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
