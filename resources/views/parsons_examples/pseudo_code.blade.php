@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Simple js-parsons pseudocode example assignment</h2>
        <p>Construct a function by drag&amp;dropping and reordering lines from the
            left to the right.
            The constructed function should set the value of variable min to be the smaller of variables a and b.</p>
        <div id="sortableTrash" class="sortable-code"></div>
        <div id="sortable" class="sortable-code">
        </div>
        <div style="clear:both;"></div>
        <p>
            <a href="#" id="newInstanceLink">New instance</a>
            <a href="#" id="feedbackLink">Get feedback</a>
        </p>
        <div id="unittest"></div>
    </div>
@endsection

@section('scripts')
    <script src=" {{asset("js/parsons.js")}}"></script>
    <script src=" {{asset("js/pseudo_code_page.js")}}"></script>
@endsection
