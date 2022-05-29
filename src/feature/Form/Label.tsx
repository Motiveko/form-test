import React, { ReactNode } from 'react';
import { Size } from 'src/common/types/ui-const';

interface LabelProps {
  size?: Size;
}

const Label: React.FC<LabelProps> = ({ size = 'normal', children }) => {
  const className = ['field-label', `is-${size}`].join(' ');

  return (
    <div className={className}>
      <label className="label">{children}</label>
    </div>
  );
};

export default Label;
