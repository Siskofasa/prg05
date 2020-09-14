@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Example of "unittests" in js-parsons</h2>
        <p>Your task is to construct a function which returns the index of the largest
            element in the array.</p>
        <div id="sortableTrash" class="sortable-code"><p>Trash</p></div>
        <div id="sortable" class="sortable-code"><p>Solution</p></div>
        <div style="clear:both;"></div>
        <p>
            <a href="#" id="newInstanceLink">New instance</a>
            <a href="#" id="feedbackLink">Get feedback</a>
        </p>
        <div id="jsparson"></div>
    </div>
@endsection

@section('scripts')
    <script src=" {{asset("js/parsons.js")}}"></script>
    <script src=" {{asset("js/unit_test_page.js")}}"></script>
@endsection
