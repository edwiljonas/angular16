// Variables
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify');

// Source
var _js = [
        'src/js/main.js',
        'src/angular/angular.js',
        'src/js/owl.js'
    ],
    _sass = [
        'src/scss/main.scss',
        'src/scss/font-awesome/scss/font-awesome.scss'
    ],
    _output = 'assets';

// Sass
gulp.task('sass', function() {
    gulp.src(_sass)
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(gulp.dest(_output+'/css'))
        .pipe(connect.reload())
});

// Script
gulp.task('scripts', function() {
    gulp.src(_js)
        .pipe(uglify())
        .pipe(gulp.dest(_output+'/js'))
        .pipe(connect.reload())
});

// Images
gulp.task('images', function() {
    return gulp.src('src/images/*.{jpg,png}')
        .pipe(gulp.dest(_output+'/images'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('scripts/*.js', ['scripts']);
    gulp.watch('src/styles/main.scss', ['sass']);
});