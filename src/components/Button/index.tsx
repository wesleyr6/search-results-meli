import { forwardRef, ForwardedRef, ReactNode } from 'react';

interface IProps {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  children: ReactNode;
  [rest: string]: any;
}

const Button = forwardRef(
  (props: IProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { type, className, children, ...rest } = props;

    return (
      <button
        type={type}
        className={`text-white bg-secondary rounded-xs text-base inline-flex justify-center items-center content-center box-border px-8 py-3 hover:bg-secondaryHover transition-all duration-300 ${className}`}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.defaultProps = {
  className: '',
};

export default Button;
