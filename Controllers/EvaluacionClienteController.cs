using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MODULOCLIENTE.Data;
using MODULOCLIENTE.Models;

namespace MODULOCLIENTE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MetodoPagoController : ControllerBase
    {
        private readonly DataBase _context;
        public MetodoPagoController(DataBase context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MetodoPago>>> GetMetodosPago() =>
            await _context.MetodosPago.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<MetodoPago>> GetMetodoPago(int id)
        {
            var mp = await _context.MetodosPago.FindAsync(id);
            return mp is null ? NotFound() : mp;
        }

        [HttpPost]
        public async Task<ActionResult<MetodoPago>> PostMetodoPago(MetodoPago mp)
        {
            _context.MetodosPago.Add(mp);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMetodoPago), new { id = mp.Id }, mp);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMetodoPago(int id, MetodoPago mp)
        {
            if (id != mp.Id) return BadRequest();
            _context.Entry(mp).State = EntityState.Modified;
            try { await _context.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.MetodosPago.AnyAsync(e => e.Id == id)) return NotFound();
                throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMetodoPago(int id)
        {
            var mp = await _context.MetodosPago.FindAsync(id);
            if (mp is null) return NotFound();
            _context.MetodosPago.Remove(mp);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
