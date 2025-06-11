public class MetodoPagoReadDto
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public string Tipo { get; set; } = string.Empty;
    public string NumeroTarjeta { get; set; } = string.Empty;
}