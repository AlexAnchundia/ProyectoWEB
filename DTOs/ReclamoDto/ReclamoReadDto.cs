public class ReclamoReadDto
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public string Descripcion { get; set; } = string.Empty;
    public string Estado { get; set; } = "Pendiente";
}