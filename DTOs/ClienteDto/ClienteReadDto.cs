namespace MODULOCLIENTE.DTOs
{
    public class ClienteReadDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public string CorreoElectronico { get; set; } = string.Empty;
        public string TipoDeLicencia { get; set; } = string.Empty;
    }
}
