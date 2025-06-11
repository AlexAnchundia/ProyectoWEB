using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization; // ✅ ESTA LÍNEA ES OBLIGATORIA
using Microsoft.EntityFrameworkCore;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;
using MODULOCLIENTE.DTOs;


namespace MODULOCLIENTE.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class NotificacionController : ControllerBase
    {
        private readonly DataBase _context;
        public NotificacionController(DataBase context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notificacion>>> GetNotificaciones() =>
            await _context.Notificaciones.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Notificacion>> GetNotificacion(int id)
        {
            var n = await _context.Notificaciones.FindAsync(id);
            return n is null ? NotFound() : n;
        }

        [HttpPost]
        public async Task<ActionResult<Notificacion>> PostNotificacion(Notificacion n)
        {
            _context.Notificaciones.Add(n);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetNotificacion), new { id = n.Id }, n);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutNotificacion(int id, Notificacion n)
        {
            if (id != n.Id) return BadRequest();
            _context.Entry(n).State = EntityState.Modified;
            try { await _context.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.Notificaciones.AnyAsync(e => e.Id == id)) return NotFound();
                throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNotificacion(int id)
        {
            var n = await _context.Notificaciones.FindAsync(id);
            if (n is null) return NotFound();
            _context.Notificaciones.Remove(n);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
