import gulp from 'gulp';
import chalk from 'chalk';

import CONFIG from './config.js';
import BROWSER from './tasks/browser.js';
import CLEAN from './tasks/clean.js';
import DATA from './tasks/data.js';
import GRAPHICS from './tasks/graphics.js';
import MARKUP from './tasks/markup.js';
import SCRIPTS from './tasks/scripts.js';

import STYLES from './tasks/styles.js';

export const watch = () => {
  
  gulp.series([ CLEAN.cleanup, STYLES.watch, SCRIPTS.watch, GRAPHICS.watch, DATA.watch, MARKUP.watch ]);
  
  BROWSER.init();

  gulp.watch(CONFIG.dir.src.markup, { cwd: CONFIG.dir.cwd }, MARKUP.watch).on('change', function() { BROWSER.reload() });
  gulp.watch(CONFIG.dir.src.data, { cwd: CONFIG.dir.cwd }, DATA.watch).on('change', function() { BROWSER.reload() });
  gulp.watch(CONFIG.dir.src.graphics, { cwd: CONFIG.dir.cwd }, GRAPHICS.watch).on('change', function() { BROWSER.reload() });
  gulp.watch(CONFIG.dir.src.styles, { cwd: CONFIG.dir.cwd }, STYLES.watch);
  gulp.watch(CONFIG.dir.src.scripts.glob, { cwd: CONFIG.dir.cwd }, SCRIPTS.watch);
};

const logVersion = (cb) => {
  console.log(`

  🚀 🚀 Starting build for version ${chalk.green(`v${CONFIG.version}`)} 🚀 🚀

  `);
  cb();
}

const buildDone = (cb) => {
  console.log(`

  ✅ ✅ Build succesful for version ${chalk.green(`v${CONFIG.version}`)} ✅ ✅

  `);
  cb();
};

export const build = gulp.series([logVersion, CLEAN.cleanup, gulp.parallel([STYLES.build, SCRIPTS.build, GRAPHICS.build]), DATA.build, MARKUP.build, buildDone]);

export default watch;
