<?php
namespace App\Http\Controllers;

use App\Models\Vehiculo;
use Illuminate\Http\Request;
use App\Services\ApiService;

class VehiculoController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/vehiculos",
     *     tags={"Vehículos"},
     *     summary="Listar todos los vehículos",
     *     @OA\Response(
     *         response=200,
     *         description="Lista de vehículos",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Vehiculo"))
     *     )
     * )
     */
    public function index()
    {
        return response()->json(Vehiculo::all());
    }

    /**
     * @OA\Post(
     *     path="/api/vehiculos",
     *     tags={"Vehículos"},
     *     summary="Crear un vehículo",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"marca", "modelo", "placa", "tipo_id"},
     *             @OA\Property(property="marca", type="string", example="Toyota"),
     *             @OA\Property(property="modelo", type="string", example="Hilux"),
     *             @OA\Property(property="placa", type="string", example="ABC123"),
     *             @OA\Property(property="tipo_id", type="integer", example=1)
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Vehículo creado",
     *         @OA\JsonContent(ref="#/components/schemas/Vehiculo")
     *     ),
     *     @OA\Response(response=422, description="Tipo de vehículo no válido")
     * )
     */
    public function store(Request $request)
    {
        $tipo = ApiService::getTipoVehiculo($request->tipo_id);
        // if (!$tipo) {
        //     return response()->json(['error' => 'Tipo de vehículo no válido'], 422);
        // }

        $vehiculo = Vehiculo::create($request->all());
        return response()->json($vehiculo, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/vehiculos/{id}",
     *     tags={"Vehículos"},
     *     summary="Obtener un vehículo por ID",
     *     @OA\Parameter(
     *         name="id", in="path", required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Vehículo encontrado",
     *         @OA\JsonContent(
     *             @OA\Property(property="vehiculo", ref="#/components/schemas/Vehiculo"),
     *             @OA\Property(property="tipo_vehiculo", type="object")
     *         )
     *     ),
     *     @OA\Response(response=404, description="Vehículo no encontrado")
     * )
     */
    public function show($id)
    {
        $vehiculo = Vehiculo::findOrFail($id);
        $tipo = ApiService::getTipoVehiculo($vehiculo->tipo_id);

        return response()->json([
            'vehiculo' => $vehiculo,
            'tipo_vehiculo' => $tipo
        ]);
    }

    /**
     * @OA\Put(
     *     path="/api/vehiculos/{id}",
     *     tags={"Vehículos"},
     *     summary="Actualizar un vehículo",
     *     @OA\Parameter(
     *         name="id", in="path", required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         @OA\JsonContent(
     *             @OA\Property(property="marca", type="string", example="Chevrolet"),
     *             @OA\Property(property="modelo", type="string", example="Dmax"),
     *             @OA\Property(property="placa", type="string", example="XYZ789")
     *         )
     *     ),
     *     @OA\Response(response=200, description="Vehículo actualizado")
     * )
     */
    public function update(Request $request, $id)
    {
        $vehiculo = Vehiculo::findOrFail($id);
        $vehiculo->update($request->all());
        return response()->json($vehiculo);
    }

    /**
     * @OA\Delete(
     *     path="/api/vehiculos/{id}",
     *     tags={"Vehículos"},
     *     summary="Eliminar un vehículo",
     *     @OA\Parameter(
     *         name="id", in="path", required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response=204, description="Vehículo eliminado"),
     *     @OA\Response(response=404, description="Vehículo no encontrado")
     * )
     */
    public function destroy($id)
    {
        Vehiculo::destroy($id);
        return response()->json(null, 204);
    }
}
