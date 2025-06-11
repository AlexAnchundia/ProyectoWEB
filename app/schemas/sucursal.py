from pydantic import BaseModel

#Dto para la sucursal
# Este archivo define los esquemas de Pydantic para las sucursales
# Estos esquemas se utilizan para validar y serializar los datos de entrada y salida de las sucursales
class SucursalBase(BaseModel):
    nombre: str
    direccion: str
    ciudad: str
    telefono: str

class SucursalCreate(SucursalBase):
    pass

class SucursalOut(SucursalBase):
    id_sucursal: int

    model_config = {
    "from_attributes": True
    }