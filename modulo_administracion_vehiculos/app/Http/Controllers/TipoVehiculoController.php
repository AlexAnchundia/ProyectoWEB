<?php
namespace App\Http\Controllers;

use App\Models\TipoVehiculo;
use Illuminate\Http\Request;

class TipoVehiculoController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/tipos-vehiculos",
     *     tags={"TipoVehiculo"},
     *     summary="Listar todos los tipos de vehículos",
     *     @OA\Response(
     *         response=200,
     *         description="Lista de tipos de vehículos",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/TipoVehiculo"))
     *     )
     * )
     */
    public function index()
    {
        return TipoVehiculo::all();
    }

    /**
     * @OA\Post(
     *     path="/api/tipos-vehiculos",
     *     tags={"TipoVehiculo"},
     *     summary="Crear un tipo de vehículo",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"descripcion", "capacidad", "transmision"},
     *             @OA\Property(property="descripcion", type="string", example="SUV"),
     *             @OA\Property(property="capacidad", type="integer", example=5),
     *             @OA\Property(property="transmision", type="string", example="Automática")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Tipo de vehículo creado",
     *         @OA\JsonContent(ref="#/components/schemas/TipoVehiculo")
     *     )
     * )
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'descripcion' => 'required|string|max:50',
            'capacidad' => 'required|integer|min:1',
            'transmision' => 'required|string|max:20',
        ]);

        $tipo = TipoVehiculo::create($validated);

        return response()->json($tipo, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/tipos-vehiculos/{id}",
     *     tags={"TipoVehiculo"},
     *     summary="Obtener un tipo de vehículo por ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Tipo de vehículo encontrado",
     *         @OA\JsonContent(ref="#/components/schemas/TipoVehiculo")
     *     ),
     *     @OA\Response(response=404, description="No encontrado")
     * )
     */
    public function show($id)
    {
        $tipo = TipoVehiculo::find($id);

        if (!$tipo) {
            return response()->json(['message' => 'Tipo de vehículo no encontrado'], 404);
        }

        return response()->json($tipo);
    }

    /**
     * @OA\Put(
     *     path="/api/tipos-vehiculos/{id}",
     *     tags={"TipoVehiculo"},
     *     summary="Actualizar un tipo de vehículo",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="descripcion", type="string", example="Pickup"),
     *             @OA\Property(property="capacidad", type="integer", example=2),
     *             @OA\Property(property="transmision", type="string", example="Manual")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Tipo de vehículo actualizado",
     *         @OA\JsonContent(ref="#/components/schemas/TipoVehiculo")
     *     ),
     *     @OA\Response(response=404, description="Tipo no encontrado")
     * )
     */
    public function update(Request $request, $id)
    {
        $tipo = TipoVehiculo::find($id);

        if (!$tipo) {
            return response()->json(['message' => 'Tipo de vehículo no encontrado'], 404);
        }

        $validated = $request->validate([
            'descripcion' => 'sometimes|required|string|max:50',
            'capacidad' => 'sometimes|required|integer|min:1',
            'transmision' => 'sometimes|required|string|max:20',
        ]);

        $tipo->update($validated);

        return response()->json($tipo);
    }

    /**
     * @OA\Delete(
     *     path="/api/tipos-vehiculos/{id}",
     *     tags={"TipoVehiculo"},
     *     summary="Eliminar un tipo de vehículo",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response=200, description="Eliminado correctamente"),
     *     @OA\Response(response=404, description="No encontrado")
     * )
     */
    public function destroy($id)
    {
        $tipo = TipoVehiculo::find($id);

        if (!$tipo) {
            return response()->json(['message' => 'Tipo de vehículo no encontrado'], 404);
        }

        $tipo->delete();

        return response()->json(['message' => 'Tipo de vehículo eliminado']);
    }
}
