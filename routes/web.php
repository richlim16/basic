<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/', function () {
    $user_id = auth::user()->id;
    return view('welcome', ['user_id' => $user_id]);
})->middleware('auth');

Route::get('/home', function() {
    $user_id = auth::user()->id;
    return view('welcome', ['user_id' => $user_id]);
})->name('home')->middleware('auth');
/*
Route::get('/{any?}', function () {
    $user_id = auth::user()->id;
    return view('welcome', ['user_id' => $user_id]);
})->where('any', '^(?!api).*$');
*/
Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

Auth::routes();

