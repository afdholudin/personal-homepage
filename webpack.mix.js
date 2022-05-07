const mix = require('laravel-mix');
require("laravel-mix-purgecss");

// mix.webpackConfig({
//     stats: {
//         children: true,
//     },
// });

mix.sass('sass/style.scss', 'public/css');