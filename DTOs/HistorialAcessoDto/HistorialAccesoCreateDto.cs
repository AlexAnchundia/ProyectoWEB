public class HistorialAccesoCreateDto
{
    public int ClienteId { get; set; }
    public DateTime FechaAcceso { get; set; }
    public string IP { get; set; } = string.Empty;
}
