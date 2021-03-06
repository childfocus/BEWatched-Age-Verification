import PACKAGE from '../package.json';

const CONFIG = {
  version: PACKAGE.version,
  dir: {
    cwd: '../src',
    src: {
      styles: '**/*.scss',
      scripts: {
        glob: 'scripts/**/*.js',
        main: 'C:/Git/childfocus/BEWatched-Age-Verification/src/scripts/bewatched-age-verification.js',
        options: 'C:/Git/childfocus/BEWatched-Age-Verification/src/scripts/bewatched-options.js',
      },
      graphics: '**/*.{png,jpg,gif,svg}',
      data: 'data/**/*',
      markup: '**/*.html'
    },
    dest: {
      styles: '../public/',
      scripts: '../public/',
      graphics: '../public/',
      markup: '../public/',
      data: '../public/data',
      clean: '../public/*',
    },
  },
  browser: {
    server: {
      baseDir: '../public',
    },
    port: 3000,
    https: true,
  }
};

export default CONFIG;
