<!DOCTYPE html>
<html lang="en">
    <head>
        @include('includes.head')

        @yield('css')
    </head>
    <body>
        <nav class="navbar navbar-default navbar-fixed-top">
            @include('includes.nav')
        </nav>
        <header class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="jumbotron">
                        @section('jumbotron')
                            @include('includes.header')
                        @show
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
            @include('includes.footer')
        </footer>

        <!-- JS Definitions -->
        <script src="{{ asset('public/js/jquery/jquery-2.x-git.min.js') }}"></script>
        <script src="{{ asset('public/js/bootstrap/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('public/js/chartjs/Chart.js' )}}"></script>

        <script src="{{ asset('public/js/application/service/statistic_service.js' )}}"></script>

        @yield('javascript')
    </body>
</html>