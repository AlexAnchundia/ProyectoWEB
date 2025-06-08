<?php
namespace App\Http\Controllers;

use App\Models\Combustible;
use App\Models\Vehiculo;
use Illuminate\Http\Request;

class CombustibleController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/combustibles",
     *     tags={"Combustible"},
     *     summary="Lista todos los combustibles",
     *     description="Obtiene todos los registros de combustible con su vehículo asociado",
     *     @OA\Response(
     *         response=200,
     *         description="Lista de combustibles",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Combustible")
     *         )
     *     )
     * )
     */
    public function index()
    {
        return response()->json(Combustible::with('vehiculo')->get());
    }

    /**
     * @OA\Post(
     *     path="/api/combustibles",
     *     tags={"Combustible"},
     *     summary="Crea un nuevo combustible",
     *     description="Crea un registro de combustible asociado a un vehículo existente",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"vehiculo_id", "tipo", "cantidad"},
     *             @OA\Property(property="vehiculo_id", type="integer", example=1),
     *             @OA\Property(property="tipo", type="string", example="Gasolina"),
     *             @OA\Property(property="cantidad", type="number", format="float", example=50.5)
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Combustible creado correctamente",
     *         @OA\JsonContent(ref="#/components/schemas/Combustible")
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

        $combustible = Combustible::create($request->all());
        return response()->json($combustible, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/combustibles/{id}",
     *     tags={"Combustible"},
     *     summary="Obtiene un combustible por ID",
     *     description="Devuelve un registro de combustible específico con su vehículo asociado",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del combustible",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Datos del combustible",
     *         @OA\JsonContent(ref="#/components/schemas/Combustible")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Combustible no encontrado"
     *     )
     * )
     */
    public function show($id)
    {
        $combustible = Combustible::with('vehiculo')->findOrFail($id);
        return response()->json($combustible);
    }

    /**
     * @OA\Put(
     *     path="/api/combustibles/{id}",
     *     tags={"Combustible"},
     *     summary="Actualiza un combustible existente",
     *     description="Actualiza un registro de combustible por ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del combustible a actualizar",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="vehiculo_id", type="integer", example=1),
     *             @OA\Property(property="tipo", type="string", example="Diesel"),
     *             @OA\Property(property="cantidad", type="number", format="float", example=40.0)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Combustible actualizado correctamente",
     *         @OA\JsonContent(ref="#/components/schemas/Combustible")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Combustible no encontrado"
     *     )
     * )
     */
    public function update(Request $request, $id)
    {
        $combustible = Combustible::findOrFail($id);
        $combustible->update($request->all());
        return response()->json($combustible);
    }

    /**
     * @OA\Delete(
     *     path="/api/combustibles/{id}",
     *     tags={"Combustible"},
     *     summary="Elimina un combustible",
     *     description="Elimina un registro de combustible por ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del combustible a eliminar",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Combustible eliminado correctamente"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Combustible no encontrado"
     *     )
     * )
     */
    public function destroy($id)
    {
        Combustible::destroy($id);
        return response()->json(null, 204);
    }
}
