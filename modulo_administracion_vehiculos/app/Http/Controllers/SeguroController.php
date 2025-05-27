<?php

namespace App\Http\Controllers;

use App\Models\Seguro;
use App\Models\Vehiculo;
use Illuminate\Http\Request;

class SeguroController extends Controller
{
    public function index()
    {
        return response()->json(Seguro::with('vehiculo')->get());
    }

    public function store(Request $request)
    {
        if (!Vehiculo::find($request->vehiculo_id)) {
            return response()->json(['error' => 'Vehículo no encontrado'], 422);
        }

        $seguro = Seguro::create($request->all());
        return response()->json($seguro, 201);
    }

    public function show($id)
    {
        $seguro = Seguro::with('vehiculo')->findOrFail($id);
        return response()->json($seguro);
    }

    public function update(Request $request, $id)
    {
        $seguro = Seguro::findOrFail($id);
        $seguro->update($request->all());
        return response()->json($seguro);
    }

    public function destroy($id)
    {
        Seguro::destroy($id);
        return response()->json(null, 204);
    }
}
