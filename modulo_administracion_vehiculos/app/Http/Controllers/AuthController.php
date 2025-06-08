<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{


    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255|unique:usuario',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $expiresIn = JWTAuth::factory()->getTTL() * 60;
        $user = usuario::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'empleado_id' => $request->empleado_id,
            'rol_id' => 3, // Fijamos el rol de cliente
        ]);

        $token = auth()->login($user);

        return response()->json([
            'message' => 'Cliente registrado correctamente',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $expiresIn
        ], 201);
    }


    public function login(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator -> errors()], 422);
        }

        $credentials = $request->only('username', 'password');

        try {
            if(!$token = JWTAuth::attempt($credentials)){
                return response()->json(['error' => 'Invalid credentials'], 401);
            }
            return response()-> json(['token' => $token], 200);
        }catch (JWTException $e){ 
            return response()->json(['could not create token', $e], 500);
        }

    }

    public function getUser(){
        $user = Auth::user();
        return response()->json($user, 200);
    }

    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['message' => 'Sesión cerrada']);
    }

    public function me()
    {
        return response()->json(JWTAuth::parseToken()->authenticate());
    }
}
