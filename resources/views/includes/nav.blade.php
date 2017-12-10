<div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Typing Test</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
            <li class="{{ Request::is("/") ? 'active' : '' }}"><a href="{{ url('/') }}">Home</a></li>
            <li class="{{ Request::is("about") ? 'active' : '' }}""><a href="{{ url('/about') }}">About</a></li>
        </ul>
    </div>
</div>