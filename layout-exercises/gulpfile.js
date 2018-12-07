'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    sass = require('gulp-sass'),
    options = {
        port: 9005,
        root: ['src'],
        devBase: 'http://localhost:',
        browser: 'chrome', 
        sassFolder: './src/scss/*.scss',
        cssCompile: './src/css',
    };

gulp.task('connect', function(){
    var openOptions = {
        uri: options.devBase + options.port,
        app: options.browser
    };
    connect.server({
        root: options.root,
        port: options.port,
        livereload: true,
    });
});

gulp.task('open', function() {
    var openOptions = {
        uri: options.devBase + options.port,
        app: options.browser
    };
    gulp.src(__filename)
    .pipe(open(openOptions));
});

gulp.task('sass', function(){
    return gulp
        .src(options.sassFolder)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(options.cssCompile));
});


gulp.task('watch', function(){
    gulp.watch(options.sassFolder, ['sass']);
});

gulp.task('default', ['connect', 'open', 'watch']);
