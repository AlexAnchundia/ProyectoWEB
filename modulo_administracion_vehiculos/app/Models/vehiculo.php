<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * @OA\Schema(
 *     schema="Vehiculo",
 *     type="object",
 *     title="Vehiculo",
 *     required={"placa", "marca", "modelo", "año", "tipo_id", "estado"},
 *     @OA\Property(property="id_vehiculo", type="integer", readOnly=true, example=1),
 *     @OA\Property(property="placa", type="string", example="ABC1234"),
 *     @OA\Property(property="marca", type="string", example="Toyota"),
 *     @OA\Property(property="modelo", type="string", example="Corolla"),
 *     @OA\Property(property="año", type="integer", example=2022),
 *     @OA\Property(property="tipo_id", type="integer", example=3),
 *     @OA\Property(property="estado", type="string", example="Disponible")
 * )
 */
class Vehiculo extends Model
{
    use HasFactory;
    protected $table = 'vehiculo';
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
        return $this->hasMany(TipoVehiculo::class, 'tipo_id', 'id_tipo');
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
