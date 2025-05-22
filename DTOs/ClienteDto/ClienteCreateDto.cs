namespace MODULOCLIENTE.DTOs
{
    public class ClienteCreateDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public string CorreoElectronico { get; set; } = string.Empty;
        public string Telefono { get; set; } = string.Empty;
        public string TipoDeLicencia { get; set; } = string.Empty;
    }
}
