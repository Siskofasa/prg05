<?php


namespace App\Http\Controllers;


use Illuminate\Contracts\Support\Renderable;

class ParsonsController
{
    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function index()
    {
        return view('parsons_examples/parsons');
    }

    public function presentation()
    {
        return view('parsons_examples/parsons', [
            "presentation" => true
        ]);
    }

    public function swap() {
        return view('parsons_examples/swap');
    }

    public function unitTest() {
        return view('parsons_examples/unit_test');
    }

    public function java() {
        return view('parsons_examples/java');
    }

    public function pseudoCode() {
        return view('parsons_examples/pseudo_code');
    }

    public function toggle() {
        return view('parsons_examples/toggle');
    }

    public function turtle() {
        return view('parsons_examples/turtle');
    }
}
