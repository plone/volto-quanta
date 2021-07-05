import React from 'react';
import loadable from '@loadable/component';

import { Icon } from '@plone/volto/components';

import downSVG from '@plone/volto/icons/down-key.svg';
import upSVG from '@plone/volto/icons/up-key.svg';
import checkSVG from '@plone/volto/icons/check.svg';

const ReactSelect = loadable.lib(() => import('react-select'));

export const SelectContainer = ({ children, ...props }) => {
  return (
    <ReactSelect>
      {({ components }) => (
        <components.SelectContainer
          {...props}
          className={props.cx(
            {
              '--is-focused': props.isFocused,
              '--has-value': props.hasValue,
              '--has-placeholder': props.selectProps.placeholder,
              '--has-error': props.selectProps.hasError?.length,
            },
            props.className,
          )}
        >
          {children}
        </components.SelectContainer>
      )}
    </ReactSelect>
  );
};

export const Option = (props) => {
  return (
    <ReactSelect>
      {({ components }) => (
        <components.Option {...props}>
          <div className="label">{props.label}</div>
          {/* {props.isFocused && !props.isSelected && (
            <Icon name={checkSVG} size="24px" color="#b8c6c8" />
          )}
          {props.isSelected && (
            <Icon name={checkSVG} size="24px" color="#007bc1" />
          )} */}
        </components.Option>
      )}
    </ReactSelect>
  );
};

export const DropdownIndicator = (props) => {
  return (
    <ReactSelect>
      {({ components }) => (
        <components.DropdownIndicator {...props}>
          {props.selectProps.menuIsOpen ? (
            <Icon name={upSVG} size="18px" color="#007bc1" />
          ) : (
            <Icon name={downSVG} size="18px" color="#007bc1" />
          )}
        </components.DropdownIndicator>
      )}
    </ReactSelect>
  );
};

export const selectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'hotpink',
    primary: '#b8c6c8',
  },
});

export const customSelectStyles = {
  control: (styles, state) => {
    console.log(state);
    return {
      ...styles,
      backgroundColor:
        state.isFocused || state.isDisabled ? '#fff !important' : null,
      boxShadow: state.isDisabled
        ? 'inset 0 0 0 1px #E4E8EC !important'
        : state.isFocused
        ? 'inset 0 0 0 2px #349ef4 !important'
        : null,
      outline: 0,
      borderRadius: '6px',
    };
  },
  input: (styles, state) => ({
    ...styles,
    padding: 0,
    margin: 0,
  }),
  menu: (styles, state) => ({
    ...styles,
    top: null,
    marginTop: 0,
    zIndex: 2,
    backgroundColor: '#FFFFFF',
    boxShadow:
      '0px 3px 6px rgba(2, 19, 34, 0.12), 0px 2px 4px rgba(2, 19, 34, 0.06)',
    borderRadius: '6px',
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    width: null,
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
  }),
  dropdownIndicator: (styles) => ({
    paddingRight: 0,
    maxHeight: '21px',
    display: 'flex',
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? '#d2d9df' : null,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 12px',
    color: state.isSelected
      ? '#007bc1'
      : state.isFocused
      ? '#4a4a4a'
      : 'inherit',
    ':active': {
      backgroundColor: null,
    },
    svg: {
      flex: '0 0 auto',
    },
  }),
};
