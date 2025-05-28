using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization; // ✅ ESTA LÍNEA ES OBLIGATORIA
using Microsoft.EntityFrameworkCore;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using MODULOCLIENTE.DTOs;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;


namespace MODULOCLIENTE.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly DataBase _context;
        public ClientesController(DataBase context) => _context = context;

        // GET api/Clientes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClienteReadDto>>> GetAll()
        {
            var list = await _context.Clientes.ToListAsync();
            var dto = list.Select(c => new ClienteReadDto
            {
                Id = c.Id,
                Nombre = c.Nombre,
                Apellido = c.Apellido,
                CorreoElectronico = c.CorreoElectronico,
                TipoDeLicencia = c.TipoDeLicencia
            });
            return Ok(dto);
        }

        // GET api/Clientes/2
        [HttpGet("{id:int}")]
        public async Task<ActionResult<ClienteReadDto>> GetOne(int id)
        {
            var c = await _context.Clientes.FindAsync(id);
            if (c == null) return NotFound();
            return Ok(new ClienteReadDto {
                Id = c.Id,
                Nombre = c.Nombre,
                Apellido = c.Apellido,
                CorreoElectronico = c.CorreoElectronico
            });
        }

        // POST api/Clientes
        [HttpPost]
        public async Task<ActionResult<ClienteReadDto>> Create([FromBody] ClienteCreateDto dto)
        {
            var c = new Cliente {
                Id=dto.Id,
                Nombre = dto.Nombre,
                Apellido = dto.Apellido,
                CorreoElectronico = dto.CorreoElectronico,
                Telefono = dto.Telefono,
                TipoDeLicencia = dto.TipoDeLicencia
            };
            _context.Clientes.Add(c);
            await _context.SaveChangesAsync();
            var result = new ClienteReadDto {
                Id = c.Id,
                Nombre = c.Nombre,
                Apellido = c.Apellido,
                CorreoElectronico = c.CorreoElectronico
            };
            return CreatedAtAction(nameof(GetOne), new { id = c.Id }, result);
        }

        // PUT api/Clientes/2
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] ClienteUpdateDto dto)
        {
            var c = await _context.Clientes.FindAsync(id);
            if (c == null) return NotFound();
            c.Nombre = dto.Nombre;
            c.Apellido = dto.Apellido;
            c.CorreoElectronico = dto.CorreoElectronico;
            c.Telefono = dto.Telefono;
            c.TipoDeLicencia = dto.TipoDeLicencia;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // PATCH api/Clientes/2
        [HttpPatch("{id:int}")]
        public async Task<IActionResult> Patch(int id, [FromBody] JsonPatchDocument<Cliente> patch)
        {
                if (patch == null) return BadRequest();

                var cliente = await _context.Clientes.FindAsync(id);
                if (cliente == null) return NotFound();

                // Aplicar el patch y verificar errores
                patch.ApplyTo(cliente, ModelState);

                if (!ModelState.IsValid)
                return BadRequest(ModelState);

                // Guardar cambios
                await _context.SaveChangesAsync();
                return NoContent();

        }

        // DELETE api/Clientes/2
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var c = await _context.Clientes.FindAsync(id);
            if (c == null) return NotFound();
            _context.Clientes.Remove(c);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
