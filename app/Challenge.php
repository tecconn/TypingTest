<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Challenge
 *
 * @property int $id
 * @property string $text
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Challenge whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Challenge whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Challenge whereText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Challenge whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Challenge extends Model {
	protected $fillable = [
		'text',
		'level',
	];
}
