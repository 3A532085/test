const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |test4
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

function addToArray(value, array = []) {
    array.push(value);
    return array;
}

const result1 = addToArray(1);
const result2 = addToArray(2);

console.log(result1); // [1, 2]
console.log(result2); // [1, 2]
