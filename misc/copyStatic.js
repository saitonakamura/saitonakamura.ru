const fs = require('fs-extra')

fs
  .copy('.next/static', 'docs/_next/static')
  .then(() => console.log('Copied static dir succesfully'))
