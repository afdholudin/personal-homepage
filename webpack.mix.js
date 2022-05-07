const mix = require('laravel-mix');
require("laravel-mix-purgecss");




mix.sass('sass/style.scss', 'public/css');