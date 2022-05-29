import React, { JSXElementConstructor, ReactNode } from 'react';
import Input from './Input';
import Label from './Label';

interface IForm
  extends React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>> {
  FormGroup: typeof FormGroup;
  Input: typeof Input;
  Label: typeof Label;
}

interface FormProps {
  children: ReactNode;
}

const Form: React.FC<any> & {
  FormGroup: typeof FormGroup;
  Input: typeof Input;
  Label: typeof Label;
} = React.forwardRef<HTMLFormElement, FormProps>(({ children }, ref) => {
  return <form ref={ref}>{children}</form>;
}) as IForm;

// TODO : addons넣어야 할 수도 있다.

interface FormGroupProps {
  children: JSX.Element | JSX.Element[];
  disabled?: boolean;
  horizontal?: boolean;
}
const FormGroup: React.FC<FormGroupProps> = ({
  children,
  disabled = false,
  horizontal = false,
}) => {
  const className = ['field', horizontal ? 'is-horizontal' : ''].join(' ');
  return (
    <div className={className}>
      {children}
      {/* {Array.isArray(children)
        ? children.map((child) => React.cloneElement(child, { horizontal }))
        : React.cloneElement(children, { horizontal })} */}
    </div>
  );
};

Form.Input = Input;
Form.Label = Label;
Form.FormGroup = FormGroup;
// export default { ...Form, FormGroup, Input, Label };
export default Form;
