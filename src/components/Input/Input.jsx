import React from 'react';
import PropTypes from 'prop-types';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import cx from 'classnames';

const Input = (props) => {
  const {
    error,
    id,
    minLength,
    maxLength,
    onChange,
    onClick,
    placeholder,
    value,
  } = props;

  return (
    <FormFieldWrapper {...props} className="text">
      <input
        aria-labelledby={`field-label-${id}`}
        aria-describedby={`field-hint-${id}`}
        className={cx('q input', { error: error })}
        id={`field-${id}`}
        placeholder={placeholder || ' '}
        value={value || ''}
        onClick={() => onClick()}
        minLength={minLength || null}
        maxLength={maxLength || null}
        onChange={({ target }) =>
          onChange(id, target.value === '' ? undefined : target.value)
        }
        {...props}
      />
    </FormFieldWrapper>
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
  error: undefined,
  value: undefined,
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
