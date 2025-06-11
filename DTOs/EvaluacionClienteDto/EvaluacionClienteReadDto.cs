public class EvaluacionClienteReadDto
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public int Puntaje { get; set; }
    public string Comentario { get; set; } = string.Empty;
}