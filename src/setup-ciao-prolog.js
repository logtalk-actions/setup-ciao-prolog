const core = require('@actions/core')
const {installCiaoProlog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const version = core.getInput('ciao-prolog-version', {required: true})

  console.log(`##[group]Installing Ciao Prolog ${version}`)
  await installCiaoProlog(version)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform == 'win32')
    throw new Error(
      '@logtalk-actions/setup-ciao-prolog does not support Windows at this time.'
    )
}
