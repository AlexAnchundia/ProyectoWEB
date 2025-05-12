<?php

namespace App\Http\Controllers;

use App\Models\Combustible;
use App\Models\Vehiculo;
use Illuminate\Http\Request;

class CombustibleController extends Controller
{
    public function index()
    {
        return response()->json(Combustible::with('vehiculo')->get());
    }

    public function store(Request $request)
    {
        if (!Vehiculo::find($request->vehiculo_id)) {
            return response()->json(['error' => 'Vehículo no encontrado'], 422);
        }

        $combustible = Combustible::create($request->all());
        return response()->json($combustible, 201);
    }

    public function show($id)
    {
        $combustible = Combustible::with('vehiculo')->findOrFail($id);
        return response()->json($combustible);
    }

    public function update(Request $request, $id)
    {
        $combustible = Combustible::findOrFail($id);
        $combustible->update($request->all());
        return response()->json($combustible);
    }

    public function destroy($id)
    {
        Combustible::destroy($id);
        return response()->json(null, 204);
    }
}
