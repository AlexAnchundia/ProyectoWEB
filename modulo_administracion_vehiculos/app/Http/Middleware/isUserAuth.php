<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

use function PHPUnit\Framework\returnSelf;

class isUserAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    //     public function handle(Request $request, Closure $next): Response
    //     {
    //         if(auth('api')->user())
    //             return $next($request);
    //         else {
    //             return response()->json(['mensage' => 'Unauthorized xD', 401]);
    //         }
    //     }
    // }
    public function handle(Request $request, Closure $next): Response
    {
        try {
            // Intenta autenticar el usuario a partir del token
            $user = JWTAuth::parseToken()->authenticate();

            if (!$user) {
                return response()->json(['message' => 'Unauthorized'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['message' => 'Token error: ' . $e->getMessage()], 401);
        }

        return $next($request);
    }
}
