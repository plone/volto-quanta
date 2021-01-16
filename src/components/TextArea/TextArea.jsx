import React from 'react';
import PropTypes from 'prop-types';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import cx from 'classnames';

const TextArea = (props) => {
  const { error, id, placeholder } = props;

  return (
    <FormFieldWrapper {...props} className="text">
      <textarea
        aria-labelledby={`field-label-${id}`}
        aria-describedby={`field-hint-${id}`}
        className={cx('q input textarea', { error: error })}
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
  error: undefined,
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
