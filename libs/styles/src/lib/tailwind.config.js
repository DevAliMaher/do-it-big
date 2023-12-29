module.exports = {
  theme: {
    colors: {
      black: {
        DEFAULT: '#000',
        faint : 'rgba(0, 0, 0, 0.3)'
      },
      white: {
        DEFAULT: '#fff',
        100: '#fefefe',
        200: '#f4f7fc',
        300: '#eee',
        400: '#ddd',
        500: '#e0e8f5',
        600: '#cfdcec',
        700: '#d6d6d6',
      },
      gray: {
        100: '#444',
        200: '#888',
      },
      red: {
        100: '#fc6c48',
        200: '#f56468',
        300: '#f4586e',
        400: '#ef5081',
        500: '#f65c65',
      },
      blue: {
        100: '#a3b1ff',
        200: '#6664ff',
        300: '#4442f6',
      },
    },
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif', 'system-ui'],
    },
    extend: {
      backgroundImage: {
        'linear-red': 'linear-gradient(#fc6c48 0%,#ef5081 100%)',
        trash:
          'url("https://nourabusoud.github.io/vue-todo-list/images/trash.svg")',
      },
    },
  },
  plugins: [
    // components
    require('./components/automation-panel.component'),
    require('./components/button.component'),
    require('./components/todo.component'),
    // utilities
    require('./plugins/border.plugin'),
    require('./plugins/inset.plugin'),
    require('./plugins/margin.plugin'),
    require('./plugins/padding.plugin'),
  ],
};
