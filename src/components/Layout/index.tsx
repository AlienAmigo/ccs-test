import React from 'react';
import { Outlet } from 'react-router-dom';
import PageContentWrapper from 'components/PageContentWrapper';
import PageWrapper from 'components/PageWrapper';
import Footer from 'components/Footer';
import Header from 'components/Header';
import GlobalStyle from 'components/GlobalStyle';

const Layout: React.FC = () => {
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
