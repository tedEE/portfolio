'use strict';

global.$ = {
	gulp : require('gulp'),
	gp   : require('gulp-load-plugins')(),//позволяет не создавать переенные плагинов
    bs   : require('browser-sync').create(),
    plumber : require('gulp-plumber'),
    gcmq : require('gulp-group-css-media-queries'),
    img : require('gulp-imagemin'),
    mainBowerFiles : require('main-bower-files'),
    svgmin: require('gulp-svgmin'),
    cheerio : require('gulp-cheerio'),
    svgSprite : require("gulp-svg-sprite"),
    // bower : require('gulp-bower-mf'),
  path : {
  	tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach( function(taskPath) {
	require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'stylus', 'scripts:lib','scripts'),
	$.gulp.parallel('watch', 'serve')
	));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('fonts','img')));