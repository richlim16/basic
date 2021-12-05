<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->text('profile_photo')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        DB::table('users')->insert([
                'username' => 'richlim16',
                'email' => 'rich16@mail.com',
                'password' => Hash::make('123')
        ]);

        DB::table('users')->insert([
                'username' => 'richlim17',
                'email' => 'rich17@mail.com',
                'password' => Hash::make('123')
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
