<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VehiculoController;
use App\Http\Controllers\MantenimientoController;
use App\Http\Controllers\SeguroController;
use App\Http\Controllers\CombustibleController;
use App\Http\Controllers\TipoVehiculoController;
use App\Http\Middleware\isUserAuth;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware([isUserAuth::class])->group(function () {
    // Vehículos
    Route::get('/vehiculos', [VehiculoController::class, 'index']);
    Route::post('/vehiculos', [VehiculoController::class, 'store']);
    Route::get('/vehiculos/{id}', [VehiculoController::class, 'show']);
    Route::put('/vehiculos/{id}', [VehiculoController::class, 'update']);
    Route::delete('/vehiculos/{id}', [VehiculoController::class, 'destroy']);

    // Mantenimientos
    Route::get('/mantenimientos', [MantenimientoController::class, 'index']);
    Route::post('/mantenimientos', [MantenimientoController::class, 'store']);
    Route::get('/mantenimientos/{id}', [MantenimientoController::class, 'show']);
    Route::put('/mantenimientos/{id}', [MantenimientoController::class, 'update']);
    Route::delete('/mantenimientos/{id}', [MantenimientoController::class, 'destroy']);

    // Seguros
    Route::get('/seguros', [SeguroController::class, 'index']);
    Route::post('/seguros', [SeguroController::class, 'store']);
    Route::get('/seguros/{id}', [SeguroController::class, 'show']);
    Route::put('/seguros/{id}', [SeguroController::class, 'update']);
    Route::delete('/seguros/{id}', [SeguroController::class, 'destroy']);

    // Combustibles
    Route::get('/combustibles', [CombustibleController::class, 'index']);
    Route::post('/combustibles', [CombustibleController::class, 'store']);
    Route::get('/combustibles/{id}', [CombustibleController::class, 'show']);
    Route::put('/combustibles/{id}', [CombustibleController::class, 'update']);
    Route::delete('/combustibles/{id}', [CombustibleController::class, 'destroy']);

    // Tipos de Vehículo
    Route::get('/tipos-vehiculo', [TipoVehiculoController::class, 'index']);
    Route::post('/tipos-vehiculo', [TipoVehiculoController::class, 'store']);
    Route::get('/tipos-vehiculo/{id}', [TipoVehiculoController::class, 'show']);
    Route::put('/tipos-vehiculo/{id}', [TipoVehiculoController::class, 'update']);
    Route::delete('/tipos-vehiculo/{id}', [TipoVehiculoController::class, 'destroy']);
});
