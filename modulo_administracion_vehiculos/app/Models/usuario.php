<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

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
