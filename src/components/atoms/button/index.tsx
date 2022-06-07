import React, { FC, HTMLProps } from 'react';
import cn from 'classnames';
import './styles.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'success' | 'error' | 'link';
}

const Button: FC<ButtonProps> = props => {
  const { children, variant, onClick } = props;
  const classnames = cn(['component-button', {
    [`component-button--${variant}`]: !!variant
  }]);

  return (
    <button className={classnames} onClick={onClick}>
      { children }
    </button>
  );
};

Button.defaultProps = {
  variant: 'success'
}

export default Button;
