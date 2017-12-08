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
 */
class Game extends Model
{

	protected $fillable = [
		'username',
	];


}
