const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  return function ({ addComponents }) {
    addComponents({
      '.automation-panel': {
        position: 'fixed',
        width: '100%',
        left: '0px',
        bottom: '0px',
        borderRadius: '2px',
        '.automation-content': {
          background: 'white',
          margin: '0 auto',
          minHeight: '150px',
          borderRadius: '5px',
          width: '90%',
        },
      },
    });
  };
});
