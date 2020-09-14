@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Simple js-parsons pseudocode example assignment</h2>
        <p>Construct code by reordering and indenting the lines.</p>
        <div id="sortableTrash" class="sortable-code"></div>
        <div style="width:95%;" id="sortable" class="sortable-code">
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
    <script src=" {{asset("js/java_page.js")}}"></script>
@endsection
