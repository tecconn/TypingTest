<?php

namespace App\Http\Controllers;

use App\Challenge;
use Illuminate\Http\Request;

class ChallengeController extends Controller {

	public function getAll() {
		return Challenge::all();
	}

	public function getOne($id) {
		return Challenge::find($id);
	}

	public function save(Request $request) {
		$challenge = Challenge::create($request->all());
		return response()->json($challenge, 201);
	}

	public function update(Request $request, Challenge $challenge) {
		$challenge->update($request->all());
		return response()->json($challenge, 200);
	}

	public function delete(Challenge $challenge) {
		$challenge->delete();
		return response()->json(null, 204);
	}

}
