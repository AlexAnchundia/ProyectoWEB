from pydantic import BaseModel
# Dto para el token de autenticación
# Este archivo define el esquema de Pydantic para el token de autenticación

class Token(BaseModel):
    access_token: str
    token_type: str