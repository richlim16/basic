<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('image')->nullable();
            $table->text('caption');
            $table->timestamps();
        });

        DB::table('posts')->insert([
                'user_id' => 1,
                'caption' => "have you heard of the mind goblins? mind goblin deeznuts. got'em."
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'caption' => "have you heard of sea of thieves? sea of thieves nuts fit in your mouth. got'em."
    ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
