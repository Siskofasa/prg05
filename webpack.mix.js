const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/lib/lis.js', 'public/js')
    // .js('resources/js/lib/parsons_smaller.js', 'public/js')
    .js('resources/js/lib/parsons.js', 'public/js')
    .js('resources/js/lib/turtle.js', 'public/js')
    .js('resources/js/parsons_problems/parsons_page.js', 'public/js')
    .js('resources/js/parsons_problems/swap_page.js', 'public/js')
    .js('resources/js/parsons_problems/unit_test_page.js', 'public/js')
    .js('resources/js/parsons_problems/java_page.js', 'public/js')
    .js('resources/js/parsons_problems/pseudo_code_page.js', 'public/js')
    .js('resources/js/parsons_problems/toggle_page.js', 'public/js')
    .js('resources/js/parsons_problems/turtle_page.js', 'public/js')
    .styles(['resources/css/parsons.css', 'resources/css/highlight.css'], 'public/css/parsons.css')
    .sass('resources/sass/app.scss', 'public/css')
