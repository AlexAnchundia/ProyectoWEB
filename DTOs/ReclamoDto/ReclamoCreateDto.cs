public class ReclamoCreateDto
{
    public int ClienteId { get; set; }
    public string Descripcion { get; set; } = string.Empty;
    public string Estado { get; set; } = "Pendiente";
}