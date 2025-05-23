<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class combustible extends Model
{
    protected $table = 'combustible';
    protected $primaryKey = 'id_combustible';
    public $timestamps = true;

    protected $fillable = [
        'vehiculo_id',
        'tipo',
        'consumo_litro_100km'
    ];

    public function vehiculo(){
        return $this->belongsTo(vehiculo::class, 'vehiculo_id', 'id_vehiculo' )
    }
    

}
