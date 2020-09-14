<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::post('/post_exercise', 'ExerciseController@create')->name('post_exercise');
Route::get('/get_exercises/{user_id}', 'ExerciseController@getExercises')->name('get_exercises');

Route::get('/home', 'HomeController@index')->name('home');

Route::get("/parsons", 'ParsonsController@index')->name("parson");
Route::get("/presentation", 'ParsonsController@presentation')->name("presentation");

Route::get("/swap", "ParsonsController@swap")->name("swap");

Route::get("/unit_test", "ParsonsController@unitTest")->name("unit_test");

Route::get("/java", "ParsonsController@java")->name("java");

Route::get("/pseudo_code", "ParsonsController@pseudoCode")->name("pseudo_code");

Route::get("/toggle", "ParsonsController@toggle")->name("toggle");

Route::get("/turtle", "ParsonsController@turtle")->name("turtle");

