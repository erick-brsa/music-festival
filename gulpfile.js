const { src, dest, watch } = require("gulp")
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-pumber')

function css(done) {
    // Identifcar el archivo de SASS
    src('src/scss/**/*.scss')

    // dependencia para debuggear
    .pipe(plumber())
    
    // Compilarlo
    .pipe(sass())
    
    // Almacenar
    .pipe(dest('build/css'))   

    done() // Callback quavisa que avisa a gulp cuando llegams al final
}

function dev(done) {
    watch('src/scss/app.scss', css)
    done()
}

exports.css = css
exports.dev = dev
