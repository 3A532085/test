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

var Data = require('axios');


function GetUser(d) {
    for (var i = 0; i < d.length; i++) {
        if (d[i] != null && d[i] != undefined) {
            console.log("user id is: " + d[i].id);
        }
    }
    Data.get("https://api.example.com/data").then(function (response) {
        console.log(response.data)
    }).catch(function (error) {
        console.log("error happened")
    })
}


