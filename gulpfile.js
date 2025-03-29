const {src, dest, watch, series} = require('gulp'); // importar gulp
const sass = require('gulp-sass')(require('sass')); // importar gulp-sass
const postcss = require('gulp-postcss'); // importar gulp-postcss
const autoprefixer = require('autoprefixer'); // importar autoprefixer

function css(done) {
    // compile css
    // identificar archivo, completarla, guardar el css
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'))
    done();
}

function dev(done){
    watch('src/scss/app.scss', css);
    done();
}


exports.css = css;
exports.dev = dev;
exports.default = series(css, dev); // ejecutar varias tareas en serie