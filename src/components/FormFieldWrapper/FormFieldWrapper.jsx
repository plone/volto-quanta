/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { css, Box } from 'theme-ui';

const REQUIREDSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="%23f54e38" d="M12 18a6 6 0 100-12 6 6 0 000 12z"/></svg>';

const base = css`
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label {
    transform: scale(0.8) translateY(-3.3rem) translateX(-0.75rem);
  }

  input[required] ~ label:after,
  textarea[required] ~ label:after {
    display: inline-block;
    vertical-align: middle;
    line-height: 0;
    margin-left: 3px;
    content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIlMjNmNTRlMzgiIGQ9Ik0xMiAxOGE2IDYgMCAxMDAtMTIgNiA2IDAgMDAwIDEyeiIvPjwvc3ZnPg==');
  }
  input[required]:not(:placeholder-shown):not(:hover):not(:active):not(:focus)
    ~ label:after,
  textarea[required]:not(:placeholder-shown):not(:hover):not(:active):not(:focus)
    ~ label:after {
    filter: grayscale(1);
  }
`;

const FieldWrapper = (props) => {
  const { children, description, disabled, error, fieldSet, id, title } = props;

  return (
    <Box
      sx={{
        position: 'relative',
        mt: 30,
        'input:focus~label, input:not(:placeholder-shown)~label, textarea:focus~label, textarea:not(:placeholder-shown)~label': {
          transform: 'scale(.8) translateY(-3.3rem) translateX(-.75rem)',
        },
        'input:not(:placeholder-shown):not(:hover):not(:active):not(:focus)~label, textarea:not(:placeholder-shown):not(:hover):not(:active):not(:focus)~label': {
          color: (theme) =>
            (error.length > 0 && theme.forms.errored.color) || 'greyPidgeon',
        },
        'input::placeholder, textarea::placeholder': {
          opacity: 0,
          color: 'greyPidgeon',
          transition: 'opacity 0.15s ease-in-out',
        },
        'input:active::placeholder, input:focus::placeholder, textarea:active::placeholder, textarea:focus::placeholder': {
          opacity: 1,
        },
        'input[required]~label:after, textarea[required]~label:after': {
          display: 'inline-block',
          verticalAlign: 'middle',
          lineHeight: 0,
          marginLeft: '3px',
          content: `url('data:image/svg+xml;utf8,${REQUIREDSVG}')`,
        },
        'input[required]:not(:placeholder-shown):not(:hover):not(:active):not(:focus)~label:after, textarea[required]:not(:placeholder-shown):not(:hover):not(:active):not(:focus)~label:after': {
          filter: 'grayscale(1)',
        },
      }}
    >
      {children}
      <label
        htmlFor={`field-${id}`}
        sx={{
          position: 'absolute',
          fontSize: '14px',
          lineHeight: '24px',
          fontFamily: 'cmsui',
          fontWeight: '500',
          background: 'transparent',
          color: (theme) =>
            (disabled && theme.forms.disabled.color) ||
            (error.length > 0 && theme.forms.errored.color) ||
            theme.forms.label.color,
          left: '.75rem',
          top: 'calc(.5rem + 6px)',
          maxWidth: 'calc(100% - 1.5rem)',
          pointerEvents: 'none',
          transformOrigin: 'bottom left',
          transition: 'transform .15s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {title}
      </label>
      {error &&
        error.map((message) => (
          <p
            key={message}
            sx={{
              fontSize: 0,
              color: (theme) => theme.forms.errored.color,
              my: 1,
            }}
          >
            {message}
          </p>
        ))}
      <p
        sx={{
          fontSize: 0,
          color: (theme) =>
            disabled
              ? theme.forms.disabled.color
              : theme.styles.input.help.color,
          my: 1,
        }}
      >
        {description}
      </p>
    </Box>
  );
};

export default FieldWrapper;
