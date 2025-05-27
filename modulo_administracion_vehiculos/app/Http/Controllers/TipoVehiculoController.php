<?php

namespace App\Http\Controllers;

use App\Models\TipoVehiculo;
use Illuminate\Http\Request;

class TipoVehiculoController extends Controller
{
    public function index()
    {
        return TipoVehiculo::all();
    }

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

    public function show($id)
    {
        $tipo = TipoVehiculo::find($id);

        if (!$tipo) {
            return response()->json(['message' => 'Tipo de vehículo no encontrado'], 404);
        }

        return response()->json($tipo);
    }

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
