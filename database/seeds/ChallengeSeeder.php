<?php

use Illuminate\Database\Seeder;
use App\Challenge;

class ChallengeSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		DB::table('challenges')->delete();

		$faker = \Faker\Factory::create();

		$challenges = [
			"This is a very easy challenge",
			"This challenge is a little harder but not by much. Particularly, this challenge 
			has a lot more words to type than the last challenge.",
			"This is a simple paragraph that is meant to be nice and easy to type which is 
			why there will be mommas no periods or any capital letters so i guess this 
			means that it cannot really be considered a paragraph but just a series of run 
			on sentences this should help you get faster at typing as im trying not to 
			use too many difficult words in it although i think that i might start making 
			it hard by including some more difficult letters I'm typing pretty quickly so 
			forgive me for any mistakes i think that i will not just tell you a story about 
			the time i went to the zoo and found a monkey and a fox playing together they were 
			so cute and i think that they were not supposed to be in the same cage but they 
			somehow were and i loved watching them horse",
			"The Super Bowl is the annual championship game of the National Football
			League (NFL), the highest level of professional American football in the
			United States, culminating a season that begins in the late summer of the
			previous calendar year. The Super Bowl uses Roman numerals to identify each
			game, rather than the year in which it is held. For example, Super Bowl I
			was played on January 15, 1967, following the 1966 regular season. The game
			was created as part of a merger agreement between the NFL and its
			then-rival league, the American Football League (AFL). It was agreed that
			the two leagues' champion teams would play in the AFL-NFL World
			Championship Game until the merger was to officially begin in 1970.",
			"Civilizations have always been pyramidal in structure. As one climbs toward the 
			apex of the social edifice, there is increased leisure and increasing opportunity 
			to pursue happiness. As one climbs, one finds also fewer and fewer people to enjoy 
			this more and more. Invariably, there is a preponderance of the dispossessed. And 
			remember this, no matter how well off the bottom layers of the pyramid might be on 
			an absolute scale, they are always dispossessed in comparison with the apex."
		];

		for ($i = 0; $i < count($challenges); $i++) {
			Challenge::create([
				'text' => $challenges[$i],
				'level' => $i + 1
			]);
		}

		for ($i = 0; $i < 20; $i++) {
			Challenge::create([
				'text' => $faker->sentence(),
				'level' => $faker->numberBetween(1, 20)
			]);
		}
	}
}
