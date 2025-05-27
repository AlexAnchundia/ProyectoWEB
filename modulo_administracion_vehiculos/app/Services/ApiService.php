<?php
namespace App\Services;

use Illuminate\Support\Facades\Http;

class ApiService
{
    public static function getTipoVehiculo($id)
    {
        $response = Http::get("https://api.externa.com/tipos-vehiculo/{$id}");
        return $response->successful() ? $response->json() : null;
    }

    public static function getVehiculo($id)
    {
        $response = Http::get("https://api.externa.com/vehiculos/{$id}");
        return $response->successful() ? $response->json() : null;
    }
}
