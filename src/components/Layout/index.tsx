import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChildrenProps } from 'types/types';
import PageContentWrapper from 'components/PageContentWrapper';
import PageWrapper from 'components/PageWrapper';
import Footer from 'components/Footer';
import Header from 'components/Header';
import GlobalStyle from 'components/GlobalStyle';

const Layout = () => {
  return (
    <>
      <PageWrapper>
        <Header />
        <PageContentWrapper>
          <Outlet />
        </PageContentWrapper>
        <Footer />
      </PageWrapper>
      <GlobalStyle />
    </>
  );
};

export default Layout;
