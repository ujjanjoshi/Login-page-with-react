const mix = require('laravel-mix');

mix.react('src/index.js', 'public/js').react().postCss('src/index.css','public/css',[
    //
]);
mix.options({
    hmrOptions:{
        host:'localhost',
        port: 8080,
    }
})
