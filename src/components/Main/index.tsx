import { ReactNode } from 'react';
import Wrapper from '../Wrapper';

interface IProps {
  children: ReactNode;
  className?: string;
}

function Main({ children, className }: IProps) {
  return (
    <main className="w-full">
      <Wrapper>
        <div className={`w-full rounded-xs bg-white box-border ${className}`}>
          {children}
        </div>
      </Wrapper>
    </main>
  );
}

Main.defaultProps = {
  className: '',
};

export default Main;
