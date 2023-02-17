import React from 'react';
import { Outlet } from 'react-router-dom';
import PageContentWrapper from 'components/PageContentWrapper';
import PageWrapper from 'components/PageWrapper';
import Footer from 'components/Footer';
import Header from 'components/Header';
import GlobalStyle from 'components/GlobalStyle';
import UpButton from 'components/UIKit/UpButton';

const Layout: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <Header />
        <PageContentWrapper>
          <Outlet />
        </PageContentWrapper>
        <Footer />
        <UpButton />
      </PageWrapper>
      <GlobalStyle />
    </>
  );
};

export default Layout;
