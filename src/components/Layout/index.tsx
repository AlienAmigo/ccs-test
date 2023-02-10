import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChildrenProps } from 'types/types';
import PageContentWrapper from 'components/PageContentWrapper';
import PageWrapper from 'components/PageWrapper';
import GlobalStyle from 'components/GlobalStyle';

const Layout = () => {
  return (
    <>
      <PageWrapper>
        <PageContentWrapper>
          Layout
          <Outlet />
        </PageContentWrapper>
      </PageWrapper>
      <GlobalStyle />
    </>
  );
};

export default Layout;
