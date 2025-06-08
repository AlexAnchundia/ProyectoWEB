<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
/**
 * @OA\Schema(
 *     schema="TipoVehiculo",
 *     required={"descripción", "capacidad", "transmisión"},
 *     @OA\Property(property="id_tipo", type="integer", example=1),
 *     @OA\Property(property="descripción", type="string", example="Camioneta"),
 *     @OA\Property(property="capacidad", type="integer", example=5),
 *     @OA\Property(property="transmisión", type="string", example="Manual")
 * )
 */
class TipoVehiculo extends Model
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