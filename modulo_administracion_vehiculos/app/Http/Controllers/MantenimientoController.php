<?php
namespace App\Http\Controllers;

use App\Models\Mantenimiento;
use App\Models\Vehiculo;
use Illuminate\Http\Request;

class MantenimientoController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/mantenimientos",
     *     tags={"Mantenimiento"},
     *     summary="Lista todos los mantenimientos",
     *     description="Obtiene todos los registros de mantenimiento con su vehículo asociado",
     *     @OA\Response(
     *         response=200,
     *         description="Lista de mantenimientos",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Mantenimiento")
     *         )
     *     )
     * )
     */
    public function index()
    {
        return response()->json(Mantenimiento::with('vehiculo')->get());
    }

    /**
     * @OA\Post(
     *     path="/api/mantenimientos",
     *     tags={"Mantenimiento"},
     *     summary="Crea un nuevo mantenimiento",
     *     description="Crea un registro de mantenimiento asociado a un vehículo existente",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"vehiculo_id", "descripcion", "fecha"},
     *             @OA\Property(property="vehiculo_id", type="integer", example=1),
     *             @OA\Property(property="descripcion", type="string", example="Cambio de aceite"),
     *             @OA\Property(property="fecha", type="string", format="date", example="2025-06-10")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Mantenimiento creado correctamente",
     *         @OA\JsonContent(ref="#/components/schemas/Mantenimiento")
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Vehículo no encontrado o datos inválidos"
     *     )
     * )
     */
    public function store(Request $request)
    {
        if (!Vehiculo::find($request->vehiculo_id)) {
            return response()->json(['error' => 'Vehículo no encontrado'], 422);
        }

        $mantenimiento = Mantenimiento::create($request->all());
        return response()->json($mantenimiento, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/mantenimientos/{id}",
     *     tags={"Mantenimiento"},
     *     summary="Obtiene un mantenimiento por ID",
     *     description="Devuelve un registro de mantenimiento específico con su vehículo asociado",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del mantenimiento",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Datos del mantenimiento",
     *         @OA\JsonContent(ref="#/components/schemas/Mantenimiento")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Mantenimiento no encontrado"
     *     )
     * )
     */
    public function show($id)
    {
        $mantenimiento = Mantenimiento::with('vehiculo')->findOrFail($id);
        return response()->json($mantenimiento);
    }

    /**
     * @OA\Put(
     *     path="/api/mantenimientos/{id}",
     *     tags={"Mantenimiento"},
     *     summary="Actualiza un mantenimiento existente",
     *     description="Actualiza un registro de mantenimiento por ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del mantenimiento a actualizar",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="vehiculo_id", type="integer", example=1),
     *             @OA\Property(property="descripcion", type="string", example="Revisión de frenos"),
     *             @OA\Property(property="fecha", type="string", format="date", example="2025-06-11")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Mantenimiento actualizado correctamente",
     *         @OA\JsonContent(ref="#/components/schemas/Mantenimiento")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Mantenimiento no encontrado"
     *     )
     * )
     */
    public function update(Request $request, $id)
    {
        $mantenimiento = Mantenimiento::findOrFail($id);
        $mantenimiento->update($request->all());
        return response()->json($mantenimiento);
    }

    /**
     * @OA\Delete(
     *     path="/api/mantenimientos/{id}",
     *     tags={"Mantenimiento"},
     *     summary="Elimina un mantenimiento",
     *     description="Elimina un registro de mantenimiento por ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del mantenimiento a eliminar",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Mantenimiento eliminado correctamente"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Mantenimiento no encontrado"
     *     )
     * )
     */
    public function destroy($id)
    {
        Mantenimiento::destroy($id);
        return response()->json(null, 204);
    }
}
