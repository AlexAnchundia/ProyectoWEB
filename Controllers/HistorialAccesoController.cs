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
    public class EvaluacionClienteController : ControllerBase
    {
        private readonly DataBase _context;
        public EvaluacionClienteController(DataBase context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EvaluacionCliente>>> GetEvaluaciones() =>
            await _context.Evaluaciones.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<EvaluacionCliente>> GetEvaluacion(int id)
        {
            var ev = await _context.Evaluaciones.FindAsync(id);
            return ev is null ? NotFound() : ev;
        }

        [HttpPost]
        public async Task<ActionResult<EvaluacionCliente>> PostEvaluacion(EvaluacionCliente ev)
        {
            _context.Evaluaciones.Add(ev);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEvaluacion), new { id = ev.Id }, ev);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvaluacion(int id, EvaluacionCliente ev)
        {
            if (id != ev.Id) return BadRequest();
            _context.Entry(ev).State = EntityState.Modified;
            try { await _context.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.Evaluaciones.AnyAsync(e => e.Id == id)) return NotFound();
                throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvaluacion(int id)
        {
            var ev = await _context.Evaluaciones.FindAsync(id);
            if (ev is null) return NotFound();
            _context.Evaluaciones.Remove(ev);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
