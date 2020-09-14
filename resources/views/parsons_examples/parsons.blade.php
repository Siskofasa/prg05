@extends('layouts.app')

@section('content')
    <div class="container">
        @guest
            <p>Please log in before starting the puzzles.</p>
        @else
            <div id="parsonsProblemParent">
                <parsons-problem
                    user-id="{{ Auth::user()->id }}"
                    add-assignment-route="{{route('post_exercise')}}"
                    get-assignments-route="{{route('get_exercises', Auth::user()->id)}}"
                    group="{{ Auth::user()->group }}"
                    :presentation-mode="{{ $presentation ?? 0 }}"></parsons-problem>

                <parsons-status-screen
                    user-id="{{ Auth::user()->id }}"
                    get-assignments-route="{{route('get_exercises', Auth::user()->id)}}"
                ></parsons-status-screen>
                @yield('content')
            </div>
        @endguest
    </div>
@endsection
