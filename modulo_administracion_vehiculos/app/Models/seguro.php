<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * @OA\Schema(
 *     schema="Seguro",
 *     required={"vehiculo_id", "compañía", "tipo_cobertura", "fecha_inicio", "fecha_fin"},
 *     @OA\Property(property="id_seguro", type="integer", example=1),
 *     @OA\Property(property="vehiculo_id", type="integer", example=2),
 *     @OA\Property(property="compañía", type="string", example="Seguros Quito S.A."),
 *     @OA\Property(property="tipo_cobertura", type="string", example="Todo riesgo"),
 *     @OA\Property(property="fecha_inicio", type="string", format="date", example="2025-01-01"),
 *     @OA\Property(property="fecha_fin", type="string", format="date", example="2026-01-01")
 * )
 */
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
                                                                                                    