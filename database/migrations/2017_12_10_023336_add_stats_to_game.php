<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStatsToGame extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('games', function (Blueprint $table) {
			$table->dateTime('start_time');
			$table->dateTime('end_time');
			$table->longText('answer');
			$table->integer('challenge_id')->unsigned();
			$table->foreign('challenge_id')
				->references('id')->on('challenges')
				->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('games', function (Blueprint $table) {
			$table->dropColumn('start_time');
			$table->dropColumn('end_time');
			$table->dropColumn('answer');
			$table->dropColumn('challenge_id');
		});
	}
}
