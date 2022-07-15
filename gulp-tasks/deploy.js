'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

gulp.task('predeploy', () => {
  return gulp
    .src(paths.deploy.src)
    .pipe(ghPages())
});

gulp.task('deploy', gulp.series('predeploy'));
