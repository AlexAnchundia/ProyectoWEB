<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
/**
 * @OA\Schema(
 *     schema="Usuario",
 *     required={"empleado_id", "username", "password", "rol_id"},
 *     @OA\Property(property="id_usuario", type="integer", example=1),
 *     @OA\Property(property="empleado_id", type="integer", example=10),
 *     @OA\Property(property="username", type="string", example="usuario123"),
 *     @OA\Property(property="password", type="string", format="password", example="secret"),
 *     @OA\Property(property="rol_id", type="integer", example=2),
 * )
 */
class Usuario extends Authenticatable implements JWTSubject
{
    protected $table = 'usuario';
    protected $primaryKey = 'id_usuario';

    protected $fillable = [
        'empleado_id',
        'username',
        'password',
        'rol_id',
    ];

    protected $hidden = [
        'password',
    ];

    public $timestamps = true;

    // JWT methods
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    // Para que Laravel use password_hash como campo password
    public function getAuthPassword()
    {
        return $this->password;
    }
}
