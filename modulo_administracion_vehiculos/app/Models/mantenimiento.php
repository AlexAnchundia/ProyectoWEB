<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * @OA\Schema(
 *     schema="Mantenimiento",
 *     required={"vehiculo_id", "fecha_inicio", "fecha_fin", "descripción", "costo"},
 *     @OA\Property(property="id_mantenimiento", type="integer", example=1),
 *     @OA\Property(property="vehiculo_id", type="integer", example=5),
 *     @OA\Property(property="fecha_inicio", type="string", format="date", example="2025-06-01"),
 *     @OA\Property(property="fecha_fin", type="string", format="date", example="2025-06-03"),
 *     @OA\Property(property="descripción", type="string", example="Cambio de aceite y filtros"),
 *     @OA\Property(property="costo", type="number", format="float", example=120.50)
 * )
 */
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
