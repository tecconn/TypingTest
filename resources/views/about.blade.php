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
    <h3>Creation</h3>
    <p>
        This application was created by William Callahan
    </p>
    <hr/>
    <h3>Games Played</h3>
    <p>
        Users have played {{ count($games) }} total games!
    </p>
    <div class="table-responsive">
        <table class="table table-responsive table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Challenge</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                </tr>
            </thead>
            <tbody>
                @foreach($games->slice(app('request')->input('page', 0) * 10, 10) as $game)
                    <tr>
                        <td>{{ $game->username }}</td>
                        <td>{{ $game->challenge_id }}</td>
                        <td>{{ $game->start_time }}</td>
                        <td>{{ $game->end_time }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        @if(count($games) > 10)
            <nav class="text-center" aria-label="Game Page Navigation">
                <ul class="pagination">
                    <li class="{{ app('request')->input('page', 0) - 1 <= (count($games) / 10) ? "disabled" : "" }}">
                        <a href="?page={{ app('request')->input('page', 0) - 1 }}" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    @for($i = 0; $i < count($games) / 10; $i++)
                        <li class="{{ app('request')->input('page', 0) == $i ? "active" : ""}}">
                            <a href="?page={{ $i }}">{{ $i + 1 }}</a></li>
                    @endfor
                    <li class="{{ app('request')->input('page', 0) + 1 >= (count($games) / 10) ? "disabled" : "" }}">
                        <a href="?page={{ app('request')->input('page', 0) + 1 }}" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        @endif
    </div>
@endsection