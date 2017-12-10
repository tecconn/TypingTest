@extends('layouts.app')

@section('title', 'Typing Test')

@slot('navigation', 'home')

@section('css')
    <link rel="stylesheet" href="{{ asset('public/css/typing_test.css') }}"/>
@endsection

@section('javascript')
    <script>
        var baseUrl = "{{ @url("/") }}";
    </script>
    <script src="{{ asset('public/js/application/model/challenge.js') }}"></script>
    <script src="{{ asset('public/js/application/model/game.js') }}"></script>
    <script src="{{ asset('public/js/application/model/user.js') }}"></script>
    <script src="{{ asset('public/js/application/repository/game_repository.js') }}"></script>
    <script src="{{ asset('public/js/application/service/answer_service.js') }}"></script>
    <script src="{{ asset('public/js/application/service/canvas_draw_service.js') }}"></script>
    <script src="{{ asset('public/js/application/service/game_service.js') }}"></script>
    <script src="{{ asset('public/js/application/utility/font_size_utility.js') }}"></script>
    <script src="{{ asset('public/js/application/controller/typing_test.js') }}"></script>
@endsection

@section('aside')
    <h3 class="text-center no-margin-top">Instructions</h3>
    <p class="text-center">Press the start button to begin.</p>

    @parent
@endsection

@section('content')
    <div class="row">
        <div class="col-md-5">
            <p>
                <button type="button" class="btn btn-success" id="start">Start</button>
                <button type="button" class="btn btn-danger" id="stop" disabled="disabled">Stop</button>
                <button type="button" class="btn btn-warning" id="reset" disabled="disabled">Reset</button>
            </p>
        </div>
        <div class="col-sm-3 text-center">
            <pre id="words-typed">0 Words</pre>
        </div>
        <div class="col-sm-2 text-center">
            <pre id="wpm">0 WPM</pre>
        </div>
        <div class="col-sm-2 text-right">
            <pre id="time-elapsed">0:00</pre>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <canvas class="typing-test" id="typing-test"></canvas>
        </div>
    </div>
@endsection