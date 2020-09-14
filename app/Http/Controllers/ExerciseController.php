<?php


namespace App\Http\Controllers;


use App\Exercise;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ExerciseController {

    public function getExercises($userId) {

        $temp = Exercise::whereUserId($userId)->get();

        return response()->json([
            "user_id" => $userId,
            "exercises" => $temp
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param Request $request
     * @return User
     */
    public function create(Request $request)
    {
        //            $table->foreignId('user_id')->constrained('users');
        //            $table->string('assignment_id'); //From external API
        //            $table->boolean('hints_available');
        //            $table->boolean('completed');
        //            $table->integer('attempts');
        //            $table->double('time_completed');

        return Exercise::create([
            "user_id" => $request["user_id"],
            "assignment_id" => $request["assignment_id"],
            "hints_available" => false,
            "hints_used" => $request["hints_used"],
            "completed" => true,
            "attempts" => $request["attempts"],
            "time_completed" => $request["time_completed"]
        ]);
    }
}
