const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

function transformacaoJS(cb) {
    return gulp.src(['src/**/*.js'])
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest(['build']))
}

function fim(cb) {
    console.log('Fim!')
    return cb()
}

exports.default = series(transformacaoJS, fim)