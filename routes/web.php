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

Route::get('/game', 'GameController@getAll');
Route::get('/game/{id}', 'GameController@getOne');
Route::post('/game', 'GameController@create');
Route::put('/game/{id}', 'GameController@update');
Route::delete('/game/{id}', 'GameController@delete');
