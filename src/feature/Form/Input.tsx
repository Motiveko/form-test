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
  onChange,
  onBlur,
  value,
  ...props
}) => {
  console.log({ ...props });
  const classNames = [
    'input',
    disabled ? '' : `is-${color}`,
    `is-${size}`,
    rounded ? 'is-rounded' : '',
  ].join(' ');
  console.log('랜더링');
  return (
    <div className="field">
      <input
        className={classNames}
        type={type}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        // value={value}  // value를 안주면 에러가 안나고 주면 에러가난다, 어떻게 이런일이..
        {...props}
      />
      {icon && icon()}
    </div>
  );
};
export default Input;
