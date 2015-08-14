'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
};

// Start a local dev server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// open up index in web browser
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open('', { url: config.devBaseUrl + ':' + config.port + '/'}));
});

// copy over html to dist
gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
});

// default task for convenience
gulp.task('default', ['html', 'open']);
