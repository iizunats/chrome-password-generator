let {series, watch, dest, src} = require("gulp"),
	browserify = require("browserify"),
	source = require('vinyl-source-stream'),
	tsify = require("tsify"),
	glob = require('glob'),
	uglify = require('gulp-uglify'),
	buffer = require('vinyl-buffer'),
	sass = require('gulp-sass');
sass.compiler = require('node-sass');


// Build JS
function scripts () {
	return browserify({
		basedir: '.',
		debug: true,
		entries: glob.sync('src/main.ts'),
		cache: {},
		packageCache: {}
	}).plugin(tsify, {
		target: 'ES5',
		experimentalDecorators: true,
		lib: ['es2018', 'dom']
	})
	  .bundle()
	  .pipe(source('build.js'))
	  .pipe(buffer())
	  .pipe(uglify())
	  .pipe(dest("public"));
}

function scss () {
	return src('./scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('public'));
}

exports.sass = scss;
exports.scripts = scripts;
exports.default = series(scripts, scss);