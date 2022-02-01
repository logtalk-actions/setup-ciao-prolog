const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installCiaoProlog}

/**
 * Install Ciao Prolog.
 *
 * @param {string} version
 */
async function installCiaoProlog(version) {
  if (process.platform == 'darwin') {
    await exec(path.join(__dirname, 'install-ciao-prolog-darwin'), [version])
  } else if (process.platform == 'linux') {
    await exec(path.join(__dirname, 'install-ciao-prolog-ubuntu'), [version])
  } else if (process.platform == 'win32') {
    await exec(path.join(__dirname, 'install-ciao-prolog-windows'), [version])
  }
}
