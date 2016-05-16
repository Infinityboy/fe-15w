/**
 * Desc: gulp部署压缩仍无文件
 * Author: liangqi
 * Date: 16/5/10
 *
 * 命令行中运行: gulp default
 * 输出文件在: dist目录下, 作为最终交付代码
 */

var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify');

var distDir = 'dist'; // 目标目录文件

// 压缩css文件
gulp.task('minCss', function () {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest(distDir + '/css'));
});

// 压缩js文件
gulp.task('minJs', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(distDir+'/js'));
});

// 拷贝html文件
gulp.task('moveHtml', function () {
    return gulp.src('*.html').pipe(gulp.dest(distDir));
});

// 拷贝图片资源
gulp.task('moveImg', function () {
    return gulp.src('images/*').pipe(gulp.dest(distDir + '/images/'));
});

// 拷贝图片资源
gulp.task('moveData', function () {
    return gulp.src('data/*').pipe(gulp.dest(distDir + '/data/'));
});


// 命令行执行gulp
gulp.task('default', ['minCss', 'minJs', 'moveHtml', 'moveImg', 'moveData']);

