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
                <section class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            @yield('content')
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <footer class="footer navbar-default navbar-fixed-bottom">
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