using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;

namespace MODULOCLIENTE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReclamoController : ControllerBase
    {
        private readonly DataBase _context;
        public ReclamoController(DataBase context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reclamo>>> GetReclamos() =>
            await _context.Reclamos.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Reclamo>> GetReclamo(int id)
        {
            var r = await _context.Reclamos.FindAsync(id);
            return r is null ? NotFound() : r;
        }

        [HttpPost]
        public async Task<ActionResult<Reclamo>> PostReclamo(Reclamo r)
        {
            _context.Reclamos.Add(r);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetReclamo), new { id = r.Id }, r);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutReclamo(int id, Reclamo r)
        {
            if (id != r.Id) return BadRequest();
            _context.Entry(r).State = EntityState.Modified;
            try { await _context.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.Reclamos.AnyAsync(e => e.Id == id)) return NotFound();
                throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReclamo(int id)
        {
            var r = await _context.Reclamos.FindAsync(id);
            if (r is null) return NotFound();
            _context.Reclamos.Remove(r);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
