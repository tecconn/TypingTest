<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {return view('index');});
Route::get('/about', function () {return view('about');});

Route::get('/game', 'GameController@getAll');
Route::get('/game/{id}', 'GameController@getOne');
Route::post('/game', 'GameController@save');
Route::put('/game/{id}', 'GameController@update');
Route::delete('/game/{id}', 'GameController@delete');

Route::get('/challenge', 'ChallengeController@getAll');
Route::get('/challenge/{id}', 'ChallengeController@getOne');
Route::post('/challenge', 'ChallengeController@save');
Route::put('/challenge/{id}', 'ChallengeController@update');
Route::delete('/challenge/{id}', 'ChallengeController@delete');
