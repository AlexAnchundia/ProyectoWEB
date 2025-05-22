using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;

namespace MODULOCLIENTE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VerificacionController : ControllerBase
    {
        private readonly DataBase _context;
        public VerificacionController(DataBase context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Verificacion>>> GetVerificaciones() =>
            await _context.Verificaciones.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Verificacion>> GetVerificacion(int id)
        {
            var v = await _context.Verificaciones.FindAsync(id);
            return v is null ? NotFound() : v;
        }

        [HttpPost]
        public async Task<ActionResult<Verificacion>> PostVerificacion(Verificacion v)
        {
            _context.Verificaciones.Add(v);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetVerificacion), new { id = v.Id }, v);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutVerificacion(int id, Verificacion v)
        {
            if (id != v.Id) return BadRequest();
            _context.Entry(v).State = EntityState.Modified;
            try { await _context.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.Verificaciones.AnyAsync(e => e.Id == id)) return NotFound();
                throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVerificacion(int id)
        {
            var v = await _context.Verificaciones.FindAsync(id);
            if (v is null) return NotFound();
            _context.Verificaciones.Remove(v);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
