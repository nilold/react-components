const path = require('path');

module.exports = {
  title: 'AC Design',
  components: 'src/**/[A-Z]*.jsx',
  defaultExample: true,
  showSidebar: true,
  usageMode: 'expand',
  exampleMode: 'expand',
  webpackConfig: require(path.join(__dirname, 'webpack.styleguide.js')),
  theme: {
    color: {
      baseBackground: '#fdfdfc',
      link: '#274e75',
      linkHover: '#90a7bf',
      border: '#e0d2de',
    },
    fontFamily: {
      base: ['Overpass', 'Helvetica', 'sans-serif']
    }
  },
  styles: {
    Playground: {
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0
      }
    },
    Markdown: {
      pre: {
        border: 0,
        background: '#fdfdfc'
      },
      code: {
        fontSize: 14
      }
    }
  },
  ignore: ['**/*.spec.js']
};