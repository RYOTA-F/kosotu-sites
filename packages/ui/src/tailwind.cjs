const path = require('path')

module.exports = {
  content: [
    path.join(path.dirname(require.resolve('ui')), '**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
}
