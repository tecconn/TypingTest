<?php

namespace App\Http\Controllers;

use App\Game;

class AboutController extends Controller {
	public function index() {
		$games = Game::all();
		return view('about', array('games' => $games));
	}
}
