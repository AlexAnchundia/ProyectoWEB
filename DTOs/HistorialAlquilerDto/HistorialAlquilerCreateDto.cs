public class HistorialAlquilerCreateDto
{
    public int ClienteId { get; set; }
    public DateTime FechaInicio { get; set; }
    public DateTime FechaFin { get; set; }
    public string Vehiculo { get; set; } = string.Empty;
}