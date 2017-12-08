@extends('layouts.app')

@section('title', 'Typing Test')

@section('aside')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    <p>This is my body content.</p>
@endsection