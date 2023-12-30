const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  return function ({ addComponents, theme }) {
    addComponents({
      '.btn': {
        display: 'inline-block',
        padding: '0.2em 1em',
        textAlign: 'center',
        fontSize: '1em',
        fontWeight: theme('fontWeight.bold'),
        lineHeight: '2em',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '3px',
        cursor: 'pointer',
        '&-add': {
          minWidth: '17%',
          float: 'right',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.3em 0.3em',
          margin: '15px 0',
          background: theme('colors.white.500'),
          color: theme('colors.white.DEFAULT'),
          borderColor: theme('colors.white.500'),
          fontSize: '2.2em',
          lineHeight: '0.5em',
          transition: 'all ease-in 0.25s',
          pointerEvents: 'none',
          '&:active': {
            transform: 'scale(0.95)',
          },
        },
        '&.active': {
          background: theme('colors.blue.200'),
          borderColor: theme('colors.blue.200'),
          pointerEvents: 'visible',
          '&:hover': {
            background: theme('colors.blue.300'),
            borderColor: theme('colors.blue.300'),
          },
        },
        '&-primary': {
          background: theme('colors.blue.300'),
          color: theme('colors.white.100'),
          borderColor: theme('colors.blue.300'),
        },
        '&-secondary': {
          background: theme('colors.transparent'),
          color: theme('colors.blue.300'),
          borderColor: theme('colors.blue.300'),
        },
      },
    });
  };
});
