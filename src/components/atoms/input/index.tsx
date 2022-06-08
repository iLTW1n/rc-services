import React, { FC, HTMLProps } from 'react';
import cn from 'classnames';
import './styles.scss';

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'size' | 'onChange'> {
  label?: string;
  size?: 'small' | 'default';
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = props => {
  const { label, onChange, size, value } = props;
  const classnames = cn(['component-input', {
    [`component-input--${size}`]: !!size
  }]);

  return (
    <div className={classnames}>
      { label &&
        <span className='component-input__label'>{ label }</span>
      }
      <input
        value={value}
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
