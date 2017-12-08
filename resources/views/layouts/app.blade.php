<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>

        <!-- CSS Definitions -->
        <link rel="stylesheet" href="{{ asset('public/js/bootstrap/css/bootstrap.min.css') }}"/>
        <link rel="stylesheet" href="{{ asset('public/js/bootstrap/css/bootstrap-theme.min.css') }}"/>
        <link rel="stylesheet" href="{{ asset('public/css/site.css') }}"/>

        @section('css')
        @show

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>
    <body>
        <nav class="navbar navbar-default navbar-fixed-top">
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
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="../navbar/">Default</a></li>
                        <li><a href="../navbar-static-top/">Static top</a></li>
                        <li class="active"><a href="./">Fixed top <span class="sr-only">(current)</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="jumbotron">
                        <h1>How fast can you type?</h1>
                        <p>Use our application to test how fast you can type. This typing test will test your skills in the following areas:</p>
                        <ul>
                            <li>Well Known Words</li>
                            <li>Short Words</li>
                            <li>Complex Words</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <main class="container">
            <div class="row">
                <section class="col-md-8">
                    <div class="well">
						@yield('content')
                    </div>
                </section>
                <aside class="col-md-3 col-md-offset-1 small-margin">
                    <div class="well">
                        @section('aside')
                            <h3 class="text-center">Statistics</h3>
                            <div class="chart-container" style="position: relative; height:100%; width:100%">
                                <canvas id="chart"></canvas>
                            </div>
                        @show
                    </div>
                </aside>
            </div>
        </main>
        <footer class="footer navbar-default">
            <div class="container">
                <div class="text-muted text-right">&copy; 2017 - William Callahan</div>
            </div>
        </footer>

        <!-- JS Definitions -->
        <script src="{{ asset('public/js/jquery/jquery-2.x-git.min.js') }}"></script>
        <script src="{{ asset('public/js/bootstrap/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('public/js/chartjs/Chart.js' )}}"></script>

        <script src="{{ asset('public/js/application/service/statistic_service.js' )}}"></script>

        @section('javascript')
        @show
    </body>
</html>