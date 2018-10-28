const ish5 = process.argv.indexOf('h5') > -1

module.exports = {
  OUTPUT_DIR: ish5 ? 'dist/h5' : 'dist/applets',
  SOURCE_DIR: 'src',
  NPM_DIR: 'npm',
  ENTRY: 'app'
}
