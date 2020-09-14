@extends('layouts.app')

@section('content')
    <div class="container">

        <h2>Example of js-parsons turtle graphics assignment</h2>
        <p>Construct a program by drag&amp;dropping and reordering lines from the
            left to the right.
            The constructed program should draw a triangle like shown below.</p>
        <style>
            canvas {
                border: 1px solid black;
            }

            .turtleFeedback {
                height: 350px;
            }

            .turtle {
                float: left;
                left: 0;
                top: 0;
                -webkit-transform: scale(0.5);
                -webkit-transform-origin: 0 0;
                height: 300px;
                width: 350px;
            }
        </style>
        <div class="turtleFeedback">
            <div class="model turtle">
                <h3>Model Drawing</h3>
                <canvas id="modelCanvas" width="600" height="600"></canvas>
            </div>
            <div class="student turtle">
                <h3>Your Drawing</h3>
                <canvas id="studentCanvas" width="600" height="600"></canvas>
            </div>
        </div>
        <div style="clear:both;"></div>
        <p>
            <a href="#" id="newInstanceLink">New instance</a>
            <a href="#" id="feedbackLink">Get feedback</a>
        </p>
        <div style="clear:both;"></div>
        <div id="sortableTrash" class="sortable-code"></div>
        <div id="sortable" class="sortable-code"></div>
        <div id="unittest"></div>
    </div>
@endsection

@section('scripts')
    <script src=" {{asset("js/turtle.js")}}"></script>
    <script src=" {{asset("js/parsons.js")}}"></script>
    <script src=" {{asset("js/turtle_page.js")}}"></script>
@endsection
