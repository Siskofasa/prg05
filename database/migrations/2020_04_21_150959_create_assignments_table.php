<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssignmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assignments', function (Blueprint $table) {
            $table->id();
            //Does this need specialphp artisan migrate --force conditions for delete? Probablyyyy
            $table->foreignId('user_id')->constrained('users');
            $table->string('assignment_id'); //From external API
            $table->boolean('hints_available');
            $table->string('hints_used');
            $table->boolean('completed');
            $table->integer('attempts');
            $table->double('time_completed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assignments');
    }
}
