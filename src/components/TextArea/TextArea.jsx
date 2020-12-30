/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { Textarea as ThemeUITextArea } from 'theme-ui';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

const TextArea = (props) => {
  const { disabled, error, fieldSet, id, placeholder, variant } = props;

  return (
    <FormFieldWrapper {...props} className="text">
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
    </FormFieldWrapper>
  );
};

TextArea.propTypes = {
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

TextArea.defaultProps = {
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

export default TextArea;
