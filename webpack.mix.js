let mix = require('laravel-mix').mix;

mix.js('src/js/index.js', 'public/js')
    .copy('src/index.html', 'public/index.html')
    .sass('src/scss/app.scss', 'public/css')
    .disableNotifications();
