import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

function Wrapper({ children }: IProps) {
  return (
    <div className="w-full px-4 lg:px-0 box-border mx-0 lg:mx-auto lg:max-w-5xl">
      {children}
    </div>
  );
}

export default Wrapper;
