<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class seguro extends Model
{
    protected $table = 'seguro';
    protected $primaryKey = 'id_matenimiento';
    public $timestamps = true;

    protected $fillable = [
        'vehiculo_id',
        'compañía',
        'tipo_cobertura',
        'fecha_inicio',
        'fecha_fin',
    ];

}
