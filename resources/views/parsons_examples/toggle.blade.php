@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Example of js-parsons toggle-exercises</h2>
        <p>Construct a function which returns the largest of the three given arguments.
            You can change the value of a toggleable element (<span class="jsparson-toggle"></span>) by clicking.</p>
        <div id="sortableTrash" class="sortable-code"><p>Trash</p></div>
        <div id="sortable" class="sortable-code"><p>Solution</p></div>
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
    <script src=" {{asset("js/toggle_page.js")}}"></script>
@endsection
