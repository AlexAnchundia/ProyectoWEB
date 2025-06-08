<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * @OA\Schema(
 *     schema="Combustible",
 *     required={"vehiculo_id", "tipo", "cantidad", "fecha"},
 *     @OA\Property(property="id", type="integer", example=1),
 *     @OA\Property(property="vehiculo_id", type="integer", example=5),
 *     @OA\Property(property="tipo", type="string", example="Diesel"),
 *     @OA\Property(property="cantidad", type="number", format="float", example=40.5),
 *     @OA\Property(property="fecha", type="string", format="date", example="2025-06-01")
 * )
 */
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
        return $this->belongsTo(vehiculo::class, 'vehiculo_id', 'id_vehiculo' );
    }

}
