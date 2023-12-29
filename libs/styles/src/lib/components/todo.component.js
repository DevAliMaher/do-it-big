const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  return function ({ addComponents, theme }) {
    addComponents({
      '.todo': {
        '&-wrapper': {
          position: 'relative',
          width: 'clamp(300px,95%,400px)',
          minHeight: '500px',
          marginInline: 'auto',
          marginBlockStart: '1.5em',
          border: `1px solid ${theme('colors.white.300')}`,
          borderRadius: '4px',
          padding: '40px 20px',
          boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.05)',
          '-webkit-box-shadow': '0 0 15px 0 rgba(0, 0, 0, 0.05)',
          backgroundColor: theme('colors.white.200'),
        },
        '&-title': {
          fontSize: '1.2em',
          color: theme('colors.red.500'),
          fontWeight: theme('fontWeight.normal'),
        },
        '&-text': {
          position: 'relative',
          display: 'inline-block',
          padding: '0 0.5em',
          cursor: 'pointer',
        },
        '&-list': {
          padding: 0,
          marginBottom: '30px',
          li: {
            position: 'relative',
            listStyleType: 'none',
            display: 'block',
            margin: '10px 0',
            background: '#e0e8f5',
            borderRadius: '3px',
            paddingLeft: '38px',
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingRight: '49px',
            overflow: 'hidden',
            '.delete': {
              position: 'absolute',
              height: '100%',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              backgroundColor: theme('colors.red.200'),
              color: theme('colors.white.DEFAULT'),
              transition: 'all ease-in 0.25s',
              width: '44px',
              opacity: 1,
              '&:after': {
                position: 'absolute',
                content: '""',
                width: '16px',
                height: '16px',
                top: '50%',
                left: '50%',
                backgroundImage: theme('backgroundImage.trash'),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                transform: 'translate(-50%, -50%) scale(1)',
                transition: 'all ease-in 0.25s',
              },
            },
            '.cool': {
              backgroundColor: theme('colors.white.700'),
            },
          },
          '.archived': {
            li: {
              background: theme('colors.white.100'),
            },
          },
        },
        '&-checkbox': {
          position: 'absolute',
          opacity: 0,
          display: 'none',
          '+ label': {
            position: 'absolute',
            cursor: 'pointer',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '22px',
            height: '22px',
            borderRadius: '2px',
            border: `1px solid ${theme('colors.white.600')}`,
            backgroundColor: theme('colors.white.DEFAULT'),
          },
          '&:checked': {
            '+ label': {
              '&:after': {
                display: 'block',
                position: 'absolute',
                content: '""',
                top: '15%',
                left: '50%',
                height: '0.5em',
                width: '0.8em',
                border: `solid ${theme('colors.red.100')}`,
                borderWidth: '0 0 2px 2px',
                transformOrigin: 'center center',
                transform: 'rotate(-45deg) translate(-50%,-50%)',
              },
            },
            '~ .todo-text': {
              color: theme('colors.gray.200'),
              textDecoration: 'line-through',
            },
          },
        },
      },
      '.status': {
        '.free': {
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '40px 0',
          img: {
            // display: 'block',
            width: '50px',
            margin: '10px auto',
            verticalAlign: 'middle',
          },
        },
      },
    });
  };
});
