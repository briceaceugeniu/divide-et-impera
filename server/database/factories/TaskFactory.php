<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    public function definition(): array
    {
    	return [
    	    'title' => $this->faker->text(50),
            'description' => $this->faker->paragraph(1),
            'progress' => $this->faker->randomFloat(2, 0,100),
            'reward' => $this->faker->text(50),
            'user_id' => 1,
            'parent' => 2
    	];
    }
}
