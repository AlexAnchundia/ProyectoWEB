<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tipo_vehiculo extends Model
{
    protected $table = 'tipovehiculo';
    protected $primaryKey = 'id_tipo';
    public $timestamps = true;

    protected $fillable = [
        'descripción',
        'capacidad',
        'transmisión',
    ];

    public function vehiculo(){
        return $this->belongsTo(vehiculo::class, 'id_vehiculo', 'vehiculo_id');
    }
}
