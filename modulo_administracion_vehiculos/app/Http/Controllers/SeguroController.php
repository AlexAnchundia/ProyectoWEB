<?php
namespace App\Http\Controllers;

use App\Models\Seguro;
use App\Models\Vehiculo;
use Illuminate\Http\Request;

class SeguroController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/seguros",
     *     tags={"Seguro"},
     *     summary="Lista todos los seguros",
     *     description="Obtiene todos los registros de seguros con su vehículo asociado",
     *     @OA\Response(
     *         response=200,
     *         description="Lista de seguros",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Seguro")
     *         )
     *     )
     * )
     */
    public function index()
    {
        return response()->json(Seguro::with('vehiculo')->get());
    }

    /**
     * @OA\Post(
     *     path="/api/seguros",
     *     tags={"Seguro"},
     *     summary="Crea un nuevo seguro",
     *     description="Crea un registro de seguro asociado a un vehículo existente",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"vehiculo_id", "tipo", "fecha_inicio", "fecha_fin"},
     *             @OA\Property(property="vehiculo_id", type="integer", example=1),
     *             @OA\Property(property="tipo", type="string", example="Seguro contra todo riesgo"),
     *             @OA\Property(property="fecha_inicio", type="string", format="date", example="2025-01-01"),
     *             @OA\Property(property="fecha_fin", type="string", format="date", example="2026-01-01")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Seguro creado correctamente",
     *         @OA\JsonContent(ref="#/components/schemas/Seguro")
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

        $seguro = Seguro::create($request->all());
        return response()->json($seguro, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/seguros/{id}",
     *     tags={"Seguro"},
     *     summary="Obtiene un seguro por ID",
     *     description="Devuelve un registro de seguro específico con su vehículo asociado",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del seguro",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Datos del seguro",
     *         @OA\JsonContent(ref="#/components/schemas/Seguro")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Seguro no encontrado"
     *     )
     * )
     */
    public function show($id)
    {
        $seguro = Seguro::with('vehiculo')->findOrFail($id);
        return response()->json($seguro);
    }

    /**
     * @OA\Put(
     *     path="/api/seguros/{id}",
     *     tags={"Seguro"},
     *     summary="Actualiza un seguro existente",
     *     description="Actualiza un registro de seguro por ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del seguro a actualizar",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="vehiculo_id", type="integer", example=1),
     *             @OA\Property(property="tipo", type="string", example="Seguro a terceros"),
     *             @OA\Property(property="fecha_inicio", type="string", format="date", example="2025-01-01"),
     *             @OA\Property(property="fecha_fin", type="string", format="date", example="2026-01-01")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Seguro actualizado correctamente",
     *         @OA\JsonContent(ref="#/components/schemas/Seguro")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Seguro no encontrado"
     *     )
     * )
     */
    public function update(Request $request, $id)
    {
        $seguro = Seguro::findOrFail($id);
        $seguro->update($request->all());
        return response()->json($seguro);
    }

    /**
     * @OA\Delete(
     *     path="/api/seguros/{id}",
     *     tags={"Seguro"},
     *     summary="Elimina un seguro",
     *     description="Elimina un registro de seguro por ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del seguro a eliminar",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Seguro eliminado correctamente"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Seguro no encontrado"
     *     )
     * )
     */
    public function destroy($id)
    {
        Seguro::destroy($id);
        return response()->json(null, 204);
    }
}
