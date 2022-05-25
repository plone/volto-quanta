import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash';
import {
  useForwardedRef,
  isNil,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
} from '../../helpers';

const Button = React.forwardRef((props, ref) => {
  const {
    active,
    animated,
    attached,
    basic,
    children,
    circular,
    className,
    color,
    compact,
    content,
    disabled,
    floated,
    fluid,
    icon,
    inverted,
    label,
    labelPosition,
    loading,
    negative,
    positive,
    primary,
    secondary,
    size,
    toggle,
  } = props;

  const buttonRef = useForwardedRef(ref);

  const computeButtonAriaRole = (ElementType) => {
    const { role } = props;

    if (!_.isNil(role)) return role;
    if (ElementType !== 'button') return 'button';
  };

  const computeElementType = () => {
    const { attached, label } = props;

    if (!_.isNil(attached) || !_.isNil(label)) return 'div';
  };

  computeTabIndex = (ElementType) => {
    const { disabled, tabIndex } = props;

    if (!_.isNil(tabIndex)) return tabIndex;
    if (disabled) return -1;
    if (ElementType === 'div') return 0;
  };

  const focus = () => _.invoke(ref.current, 'focus');

  const handleClick = (e) => {
    const { disabled } = props;

    if (disabled) {
      e.preventDefault();
      return;
    }

    _.invoke(props, 'onClick', e, props);
  };

  const baseClasses = cx(
    color,
    size,
    useKeyOnly(active, 'active'),
    useKeyOnly(basic, 'basic'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(compact, 'compact'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(hasIconClass(), 'icon'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(loading, 'loading'),
    useKeyOnly(negative, 'negative'),
    useKeyOnly(positive, 'positive'),
    useKeyOnly(primary, 'primary'),
    useKeyOnly(secondary, 'secondary'),
    useKeyOnly(toggle, 'toggle'),
    useKeyOrValueAndKey(animated, 'animated'),
    useKeyOrValueAndKey(attached, 'attached'),
  );

  const labeledClasses = cx(
    useKeyOrValueAndKey(labelPosition || !!label, 'labeled'),
  );
  const wrapperClasses = cx(
    useKeyOnly(disabled, 'disabled'),
    useValueAndKey(floated, 'floated'),
  );

  const rest = getUnhandledProps(Button, props);
  const ElementType = getElementType(Button, props, computeElementType);
  const tabIndex = computeTabIndex(ElementType);

  const classes = cx(
    'ui',
    baseClasses,
    wrapperClasses,
    labeledClasses,
    'button',
    className,
  );
  const hasChildren = !childrenUtils.isNil(children);
  const role = this.computeButtonAriaRole(ElementType);

  return (
    <button
      id={`button-${id}`}
      ref={buttonRef}
      style={{ fontSize: '20px' }}
      className={cx('button', { className })}
    >
      {content}
    </button>
  );
});

Button.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'text',
};

export default Button;
