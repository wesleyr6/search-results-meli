import { forwardRef, ForwardedRef } from 'react';

interface IProps {
  type?: string;
  placeholder?: string;
  className?: string;
  [rest: string]: any;
}

const TextField = forwardRef(
  (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      type = 'text',
      placeholder = 'Nunca dejes de buscar',
      className = '',
      ...rest
    } = props;

    return (
      <input
        ref={ref}
        type={type}
        className={`box-border rounded-tl-xs rounded-bl-xs pl-4 pr-10 w-full outline-none font-normal text-lg transition-all ${className}`}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

TextField.defaultProps = {
  type: 'text',
  placeholder: 'Nunca dejes de buscar',
  className: '',
};

export default TextField;
