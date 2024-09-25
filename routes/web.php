<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;


Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');

// Route::inertia('/', 'Home');
