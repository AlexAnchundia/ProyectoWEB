<?php

namespace App\Http\Controllers;

use App\Models\Mantenimiento;
use App\Models\Vehiculo;
use Illuminate\Http\Request;

class MantenimientoController extends Controller
{
    public function index()
    {
        return response()->json(Mantenimiento::with('vehiculo')->get());
    }

    public function store(Request $request)
    {
        if (!Vehiculo::find($request->vehiculo_id)) {
            return response()->json(['error' => 'Vehículo no encontrado'], 422);
        }

        $mantenimiento = Mantenimiento::create($request->all());
        return response()->json($mantenimiento, 201);
    }

    public function show($id)
    {
        $mantenimiento = Mantenimiento::with('vehiculo')->findOrFail($id);
        return response()->json($mantenimiento);
    }

    public function update(Request $request, $id)
    {
        $mantenimiento = Mantenimiento::findOrFail($id);
        $mantenimiento->update($request->all());
        return response()->json($mantenimiento);
    }

    public function destroy($id)
    {
        Mantenimiento::destroy($id);
        return response()->json(null, 204);
    }
}
