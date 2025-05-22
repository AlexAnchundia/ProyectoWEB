using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;

namespace MODULOCLIENTE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HistorialAccesoController : ControllerBase
    {
        private readonly DataBase _context;
        public HistorialAccesoController(DataBase context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<HistorialAcceso>>> GetAccesos() =>
            await _context.HistorialAccesos.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<HistorialAcceso>> GetAcceso(int id)
        {
            var ha = await _context.HistorialAccesos.FindAsync(id);
            return ha is null ? NotFound() : ha;
        }

        [HttpPost]
        public async Task<ActionResult<HistorialAcceso>> PostAcceso(HistorialAcceso ha)
        {
            _context.HistorialAccesos.Add(ha);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAcceso), new { id = ha.Id }, ha);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAcceso(int id, HistorialAcceso ha)
        {
            if (id != ha.Id) return BadRequest();
            _context.Entry(ha).State = EntityState.Modified;
            try { await _context.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.HistorialAccesos.AnyAsync(e => e.Id == id)) return NotFound();
                throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAcceso(int id)
        {
            var ha = await _context.HistorialAccesos.FindAsync(id);
            if (ha is null) return NotFound();
            _context.HistorialAccesos.Remove(ha);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
