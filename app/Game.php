<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Game
 *
 * @property int $id
 * @property string $username
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Game whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Game whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Game whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Game whereUsername($value)
 * @mixin \Eloquent
 * @property string $start_time
 * @property string $end_time
 * @property string $answer
 * @property int $challenge_id
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Challenge[] $challenges
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Game whereAnswer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Game whereChallengeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Game whereEndTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Game whereStartTime($value)
 */
class Game extends Model {

	protected $fillable = [
		'username',
		'start_time',
		'end_time',
		'end_time',
		'answer',
		'challenge',
	];

	public function challenges() {
		return $this->hasMany('App\Challenge');
	}

}
