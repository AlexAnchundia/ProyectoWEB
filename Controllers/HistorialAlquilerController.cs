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
    public class HistorialAlquilerController : ControllerBase
    {
        private readonly DataBase _context;
        public HistorialAlquilerController(DataBase context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<HistorialAlquiler>>> GetAlquileres() =>
            await _context.HistorialAlquileres.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<HistorialAlquiler>> GetAlquiler(int id)
        {
            var ha = await _context.HistorialAlquileres.FindAsync(id);
            return ha is null ? NotFound() : ha;
        }

        [HttpPost]
        public async Task<ActionResult<HistorialAlquiler>> PostAlquiler(HistorialAlquiler ha)
        {
            _context.HistorialAlquileres.Add(ha);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAlquiler), new { id = ha.Id }, ha);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlquiler(int id, HistorialAlquiler ha)
        {
            if (id != ha.Id) return BadRequest();
            _context.Entry(ha).State = EntityState.Modified;
            try { await _context.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.HistorialAlquileres.AnyAsync(e => e.Id == id)) return NotFound();
                throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlquiler(int id)
        {
            var ha = await _context.HistorialAlquileres.FindAsync(id);
            if (ha is null) return NotFound();
            _context.HistorialAlquileres.Remove(ha);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
