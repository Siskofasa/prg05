@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Variable Swap</h2>
        <p>Construct a program that swaps the values of variables <code>x</code> and <code>y</code> using the
            helper variable <code>tmp</code>. You can change the names of the variables (<span class="jsparson-toggle"></span>)
            by clicking them.</p>
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
    <script src=" {{asset("js/swap_page.js")}}"></script>
@endsection
