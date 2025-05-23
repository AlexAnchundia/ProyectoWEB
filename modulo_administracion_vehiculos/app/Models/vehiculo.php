<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class vehiculo extends Model
{
    protected $table = 'vehiculos';
    protected $primaryKey = 'id_vehiculo';
    public $timestamps = 'true'; //guarda registros de actualizacion y creacion de la tabla

    //Declaracion de atributos
    protected $fillable = [
        'placa',
        'marca',
        'modelo',
        'año',
        'tipo_id',
        'estado'
    ];

    //Relaciones con vehiculos
    public function tipo()
    {
        return $this->hasMany(Tipo_vehiculo::class, 'tipo_id', 'id_tipo');
    }
    public function mantenimiento()
    {
        return $this->hasMany(mantenimiento::class, 'vehiculo_id', 'id_vehiculo');
    }
    public function combustible()
    {
        return $this->hasOne(combustible::class, 'id_vehiculo', 'vehiculo_id');
    }

    /*
       Para la relacione con entidades de otros modulos se hacer la 
       llamada a los endPoint de los otros modulos 
        Entidades:
        -historialalquiler
        -
    */
}
