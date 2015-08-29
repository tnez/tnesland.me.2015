'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var shell = require('gulp-shell');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.jsx',
        dataDir: './src/data',
        data: './src/data/**/*.json',
        img: [
            './src/img/**/*.jpg',
            './src/img/**/*.jpeg',
            './src/img/**/*.png',
            './src/img/**/*.bmp',
            './src/img/**/*.gif',
            'node_modules/react-widgets/dist/img/*.gif'
        ],
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/boostrap-theme.min.css',
            'node_modules/font-awesome/css/font-awesome.min.css',
            'node_modules/react-widgets/dist/css/*.css',
            './src/style/*.css'
        ],
        fonts: [
            'node_modules/font-awesome/fonts/fontawesome-webfont.*',
            'node_modules/react-widgets/dist/fonts/rw-widgets.*'
        ],
        scriptDir: './src/scripts',
        dist: './dist',
        mainJs: './src/main.jsx'
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
    var options = {
        uri: config.devBaseUrl + ":" + config.port + "/"
    };
    gulp.src('./dist/index.html')
        .pipe(open(options));
});

// copy over html to dist
gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('data', function() {
    gulp.src(config.paths.data)
        .pipe(gulp.dest(config.paths.dist + '/data'))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

gulp.task('fonts', function() {
    gulp.src(config.paths.fonts)
        .pipe(gulp.dest(config.paths.dist + '/fonts'))
        .pipe(connect.reload());
});

gulp.task('img', function() {
    gulp.src(config.paths.img)
        .pipe(gulp.dest(config.paths.dist + '/img'))
        .pipe(connect.reload());
});

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format())
        .pipe(lint.failOnError());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
    gulp.watch('./src/style/*.css', ['css']);
});

gulp.task('fetchData', shell.task([
    '/Users/tnesland/VirtualEnvs/stdpy/bin/python' + ' ' + config.paths.scriptDir + '/get_github_commits.py' + ' ' + config.paths.dataDir + '/github.json'
]));

// commonly used gulp tasks
gulp.task('dev', ['html', 'css', 'fonts', 'img', 'data', 'js', 'lint', 'open', 'watch']);
gulp.task('build', ['lint', 'fetchData', 'data', 'html', 'js', 'css', 'fonts', 'img']);
