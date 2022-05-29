import React, { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from 'react';
import { Color, Size } from 'src/common/types/ui-const';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  color?: Color;
  size?: Size;
  rounded?: boolean;
  disabled?: boolean;
  icon?: () => ReactNode;
  type: HTMLInputTypeAttribute;
}
// TODO : horizontal 이대로 괜찮은가?
const Input: React.FC<InputProps> = ({
  color = 'primary',
  size = 'normal',
  rounded = false,
  disabled = false,
  icon,
  type = 'text',
  ...props
}) => {
  const classNames = [
    'input',
    disabled ? '' : `is-${color}`,
    `is-${size}`,
    rounded ? 'is-rounded' : '',
  ].join(' ');

  return (
    <div className="field">
      <input className={classNames} type={type} disabled={disabled} {...props} />
      {icon && icon()}
    </div>
  );
};

export default Input;
