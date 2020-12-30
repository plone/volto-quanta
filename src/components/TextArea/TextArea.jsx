/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { Box, Textarea as ThemeUITextArea } from 'theme-ui';

const REQUIREDSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="%23f54e38" d="M12 18a6 6 0 100-12 6 6 0 000 12z"/></svg>';

const Input = (props) => {
  const {
    description,
    disabled,
    error,
    fieldSet,
    id,
    placeholder,
    title,
    variant,
  } = props;

  return (
    <Box
      sx={{
        position: 'relative',
        mt: 30,
        'textarea:focus~label, textarea:not(:placeholder-shown)~label': {
          transform: 'scale(.8) translateY(-3.3rem) translateX(-.75rem)',
        },
        'textarea:not(:placeholder-shown):not(:hover):not(:active):not(:focus)~label': {
          color: (theme) =>
            (error.length > 0 && theme.forms.errored.color) || 'greyPidgeon',
        },
        'textarea::placeholder': {
          opacity: 0,
          color: 'greyPidgeon',
          transition: 'opacity 0.15s ease-in-out',
        },
        'textarea:active::placeholder, textarea:focus::placeholder': {
          opacity: 1,
        },
        'textarea[required]~label:after': {
          display: 'inline-block',
          verticalAlign: 'middle',
          lineHeight: 0,
          marginLeft: '3px',
          content: `url('data:image/svg+xml;utf8,${REQUIREDSVG}')`,
        },
        'textarea[required]:not(:placeholder-shown):not(:hover):not(:active):not(:focus)~label:after': {
          filter: 'grayscale(1)',
        },
      }}
    >
      <ThemeUITextArea
        className="quanta textarea"
        sx={{
          '&:hover': {
            backgroundColor: (theme) =>
              error.length > 0
                ? theme.forms.errored.hoverColor
                : theme.styles.input.hovered.backgroundColor,
          },
          '&:focus': {
            borderColor: (theme) =>
              error.length > 0
                ? theme.forms.errored.focusBorderColor
                : theme.styles.input.focused.borderColor,
            outlineColor: (theme) =>
              error.length > 0
                ? theme.forms.errored.focusBorderColor
                : theme.styles.input.focused.borderColor,
            backgroundColor: (theme) =>
              theme.styles.input.focused.backgroundColor,
          },
        }}
        variant={
          (disabled && 'disabled') ||
          (error.length > 0 && 'errored') ||
          variant ||
          'textarea'
        }
        id={`field-${id}`}
        placeholder={placeholder || ' '}
        {...props}
      />
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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  focus: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  icon: PropTypes.shape({
    xmlns: PropTypes.string,
    viewBox: PropTypes.string,
    content: PropTypes.string,
  }),
  iconAction: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  wrapped: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  onEdit: null,
  onDelete: null,
  focus: false,
  icon: null,
  iconAction: null,
  minLength: null,
  maxLength: null,
};

export default Input;
