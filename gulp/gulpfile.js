var gulp = require('gulp'),
minifycss = require('gulp-clean-css'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
jshint = require('gulp-jshint'),
    htmlmin = require("gulp-htmlmin");
//语法检查
gulp.task('jshint', function () {
    return gulp.src('html/js/util/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
//压缩css
gulp.task('minifycss', function() {
    return gulp.src(['html/css/main.css'])    //需要操作的文件
        .pipe(concat('main.css'))
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('html/css'));   //输出文件夹
});
//压缩,合并 js
gulp.task('minifyjs', function() {
    //压缩libs
        gulp.src(['html/js/libs/*.js','html/js/animate/*.js'])      //需要操作的文件
        .pipe(concat('libs.js'))    //合并所有js到main.js
        .pipe(gulp.dest('html/js'))       //输出到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('html/js/'));  //输出
    //压缩app
    gulp.src(['html/js/util/*.js'])      //需要操作的文件
        .pipe(concat('app.js'))    //合并所有js到main.js
        .pipe(gulp.dest('html/js'))       //输出到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('html/js'));  //输出
});
//压缩html
gulp.task('htmlmin',function(){
    var options = {
        collapseWhitespace:true,
        collapseBooleanAttributes:true,
        removeComments:true,
        removeEmptyAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true,
        minifyCSS:true
    };
    gulp.src('html/build.html')
        .pipe(htmlmin(options))
        .pipe(concat('index.html'))
        .pipe(gulp.dest('html/'));
});
//默认命令,在cmd中输入gulp后,执行的就是这个任务(压缩js需要在检查js之后操作)
gulp.task('default',['jshint'], function() {
    gulp.start('minifyjs');
    gulp.start('minifycss');
});