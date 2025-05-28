public class HistorialAlquilerReadDto
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public DateTime FechaInicio { get; set; }
    public DateTime FechaFin { get; set; }
    public string Vehiculo { get; set; } = string.Empty;
}