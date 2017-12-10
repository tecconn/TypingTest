<?php

namespace App\Http\Controllers;

use App\Game;
use Illuminate\Http\Request;

class GameController extends Controller {
	public function getAll() {
    	return Game::all();
	}

	public function getOne($id) {
		return Game::find($id);
	}

	public function save(Request $request) {
		syslog(LOG_INFO, "Saving...");
		$game = Game::create($request->all());
		return response()->json($game, 201);
	}

	public function update(Request $request, Game $game) {
		$game->update($request->all());
		return response()->json($game, 200);
	}

	public function delete(Game $game) {
		$game->delete();
		return response()->json(null, 204);
	}
}
