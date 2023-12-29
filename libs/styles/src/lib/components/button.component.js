const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  return function ({ addComponents, theme }) {
    addComponents({
      '.btn': {
        textAlign: 'center',
        fontWeight: theme('fontWeight.bold'),
        cursor: 'pointer',
        borderWidth: '1px',
        borderStyle: 'solid',
        lineHeight: '2em',
        borderRadius: '3px',
        border: 0,
        display: 'inline-block',
        margin: '15px 0',
        padding: '0.2em 1em',
        fontSize: '1em',
        '&-add': {
          background: theme('colors.white.500'),
          color: theme('colors.white.DEFAULT'),
          borderColor: theme('colors.white.500'),
          minWidth: '17%',
          pointerEvents: 'none',
          transition: 'all ease-in 0.25s',
          fontSize: '2.2em',
          lineHeight: '0.5em',
          padding: '0.3em 0.3em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          float: 'right',
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
      },
    });
  };
});
