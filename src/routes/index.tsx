import React, { Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Layout from 'components/Layout';
import UILoader from 'components/UIKit/UILoader';

const HomeView = React.lazy(() => import('views/Home'));
const ProductsView = React.lazy(() => import('views/Products'));
const ServicesView = React.lazy(() => import('views/Services'));
const LocationsView = React.lazy(() => import('views/Locations'));
const CareersView = React.lazy(() => import('views/Careers'));
const SupportView = React.lazy(() => import('views/Support'));

export enum PATH {
  BASE = '/',
  PRODUCTS = 'products',
  LOCATIONS = 'locations',
  SERVICES = 'services',
  CAREERS = 'careers',
  SUPPORT = 'support'
}

const routes = (
  <Suspense fallback={<UILoader />}>
    <Switch>
      <Route path={PATH.BASE} element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path={PATH.PRODUCTS} element={<ProductsView />} />
        <Route path={PATH.LOCATIONS} element={<LocationsView />} />
        <Route path={PATH.SERVICES} element={<ServicesView />} />
        <Route path={PATH.CAREERS} element={<CareersView />} />
        <Route path={PATH.SUPPORT} element={<SupportView />} />
      </Route>
    </Switch>
  </Suspense>
);
export default routes;
