import { ReactNode } from 'react';
import Breadcrumb from '../Breadcrumb';
import Header from '../Header';
import Main from '../Main';

interface IProps {
  children: ReactNode;
  contentClassName?: string;
  breadcrumbItems?: string[];
}

function MasterPage({ children, contentClassName, breadcrumbItems }: IProps) {
  return (
    <div className="w-full">
      <Header />

      <Breadcrumb items={breadcrumbItems || []} />

      <Main className={contentClassName || 'p-4'}>{children}</Main>
    </div>
  );
}

MasterPage.defaultProps = {
  contentClassName: '',
  breadcrumbItems: [],
};

export default MasterPage;
