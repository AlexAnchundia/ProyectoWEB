<?php

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class VehiculoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'placa' => $this->faker->unique()->regexify('[A-Z]{3}[0-9]{3}'),
            'marca' => $this->faker->randomElement(['Toyota', 'Nissan', 'Ford']),
            'modelo' => $this->faker->word,
            'año' => $this->faker->year,
            'tipo_id' => 1, // asegúrate de que exista en tu tabla tipo_vehiculo
            'estado' => 'Disponible',
        ];
    }
}

