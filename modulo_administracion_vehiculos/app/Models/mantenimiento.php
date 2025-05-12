<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class mantenimiento extends Model
{
    protected $table = 'mantenimiento';
    protected $primaryKey = 'id_mantenimiento';
    public $timestamps = true; 

    protected $fillable = [
        'vehiculo_id',
        'fecha_inicio',
        'fecha_fin',
        'descripción',
        'costo',
    ];

    public function vehiculo(){
        return $this->belongsTo(vehiculo::class, 'vehiculo_id', 'id_vehiculo');
    }
}
