public class VerificacionCreateDto
{
    public int ClienteId { get; set; }
    public string Documento { get; set; } = string.Empty;
    public bool Verificado { get; set; }
}