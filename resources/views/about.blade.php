@extends('layouts.full-width')

@section('title', 'About')

@slot('navigation', 'about')

@section('css')
@endsection

@section('javascript')
@endsection

@section('jumbotron')
    <h1>About</h1>
@endsection

@section('content')
    <p>
        This application was created by William Callahan
    </p>
    <hr/>
    <p>
        Users have played {{ count($games) }} total games!
    </p>
@endsection