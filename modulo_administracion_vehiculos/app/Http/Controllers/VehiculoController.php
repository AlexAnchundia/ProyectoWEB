<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers;

use App\Models\Vehiculo;
use Illuminate\Http\Request;
use App\Services\ApiService;

class VehiculoController extends Controller
{
    public function index()
    {
        return response()->json(Vehiculo::all());
    }

    public function store(Request $request)
    {
        $tipo = ApiService::getTipoVehiculo($request->tipo_id);
        if (!$tipo) {
            return response()->json(['error' => 'Tipo de vehículo no válido'], 422);
        }

        $vehiculo = Vehiculo::create($request->all());
        return response()->json($vehiculo, 201);
    }

    public function show($id)
    {
        $vehiculo = Vehiculo::findOrFail($id);
        $tipo = ApiService::getTipoVehiculo($vehiculo->tipo_id);

        return response()->json([
            'vehiculo' => $vehiculo,
            'tipo_vehiculo' => $tipo
        ]);
    }

    public function update(Request $request, $id)
    {
        $vehiculo = Vehiculo::findOrFail($id);
        $vehiculo->update($request->all());
        return response()->json($vehiculo);
    }

    public function destroy($id)
    {
        Vehiculo::destroy($id);
        return response()->json(null, 204);
    }
}