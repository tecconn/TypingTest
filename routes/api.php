<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api');

Route::get('/games', 'GameController@getAll');
Route::get('/games/{id}', 'GameController@getOne');
Route::post('/games', 'GameController@save');
Route::put('/games/{id}', 'GameController@update');
Route::delete('/games/{id}', 'GameController@delete');

Route::get('/challenges', 'ChallengeController@getAll');
Route::get('/challenges/{id}', 'ChallengeController@getOne');
Route::post('/challenges', 'ChallengeController@save');
Route::put('/challenges/{id}', 'ChallengeController@update');
Route::delete('/challenges/{id}', 'ChallengeController@delete');
