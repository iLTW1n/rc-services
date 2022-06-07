import React, { FC } from 'react';
import cn from 'classnames';
import './styles.scss';

interface InputProps {
  label?: string;
  onChange: (value: string) => void;
  size?: 'small' | 'default';
}

const Input: FC<InputProps> = props => {
  const { label, onChange, size } = props;
  const classnames = cn(['component-input', {
    [`component-input--${size}`]: !!size
  }]);

  return (
    <div className={classnames}>
      { label &&
        <span className='component-input__label'>{ label }</span>
      }
      <input
        onChange={event => onChange(event.target.value)}
        className='component-input__input'
        type='text'
      />
    </div>
  );
};

Input.defaultProps = {
  size: 'default'
}

export default Input;
