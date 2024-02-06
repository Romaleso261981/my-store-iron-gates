import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spiner } from '@/shared/components/Loader/Loader';
import { RoutersPaths } from '@/shared/types/enums';

import { Layout } from './layout';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const AdminPage = lazy(() => import('../pages/AdminPage/AdminPage'));
const NotFound = lazy(() => import('../pages/Error-404/Error-404'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));

export default function RootRouter() {
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={RoutersPaths.LOGIN} element={<AuthPage />} />
          <Route path={RoutersPaths.ADMIN} element={<AdminPage />} />
          <Route index element={<MainPage />} />
          <Route path={RoutersPaths.PROFILE} element={<ProfilePage />} />
          <Route path={RoutersPaths.NOFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
