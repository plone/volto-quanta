/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Input as ThemeUIInput } from 'theme-ui';

const REQUIREDSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="%23f54e38" d="M12 18a6 6 0 100-12 6 6 0 000 12z"/></svg>';

const Input = (props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        'input:focus~label, input:not(:placeholder-shown)~label': {
          transform: 'scale(.8) translateY(-3.3rem) translateX(-.75rem)',
        },
        'input:not(:placeholder-shown):not(:hover):not(:active):not(:focus)~label': {
          color: 'greyPidgeon',
        },
        'input::placeholder': {
          opacity: 0,
          color: 'greyPidgeon',
          transition: 'opacity 0.15s ease-in-out',
        },
        'input:active::placeholder, input:focus::placeholder': {
          opacity: 1,
        },
        'input[required]~label:after': {
          display: 'inline-block',
          verticalAlign: 'middle',
          lineHeight: 0,
          marginLeft: '3px',
          content: `url('data:image/svg+xml;utf8,${REQUIREDSVG}')`,
        },
        'input[required]:not(:placeholder-shown):not(:hover):not(:active):not(:focus)~label:after': {
          filter: 'grayscale(1)',
        },
      }}
    >
      <ThemeUIInput
        sx={{
          '&:hover': {
            backgroundColor: (theme) => theme.forms.hovered.backgroundColor,
          },
          '&:focus': {
            borderColor: (theme) => theme.forms.focused.borderColor,
            outlineColor: (theme) => theme.forms.focused.borderColor,
            backgroundColor: (theme) => theme.forms.focused.backgroundColor,
          },
        }}
        variant={props.disabled ? 'disabled' : props.variant || 'input'}
        placeholder={props.placeholder || ' '}
        {...props}
      />
      <label
        htmlFor={props.id}
        sx={{
          position: 'absolute',
          fontSize: '14px',
          lineHeight: '24px',
          fontFamily: 'cmsui',
          fontWeight: '500',
          background: 'transparent',
          color: (theme) =>
            props.disabled
              ? theme.forms.disabled.color
              : theme.forms.label.color,
          left: '.75rem',
          top: 'calc(.5rem + 6px)',
          maxWidth: 'calc(100% - 1.5rem)',
          pointerEvents: 'none',
          transformOrigin: 'bottom left',
          transition: 'transform .15s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {props.id}
      </label>
      <p
        sx={{
          fontSize: 0,
          color: props.disabled ? 'greySilver' : 'greyPidgeon',
          mt: 1,
        }}
      >
        {props.description}
      </p>
    </Box>
  );
};

export default Input;
