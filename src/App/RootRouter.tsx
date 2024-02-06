import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spiner } from '@/shared/components/Loader/Loader';
import { RoutersPaths } from '@/shared/types/enums';

import { Layout } from './layout';

const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const AdminPage = lazy(() => import('../pages/AdminPage/AdminPage'));
const NotFound = lazy(() => import('../pages/Error-404/Error-404'));
const GateWithCorrugatedBoard = lazy(
  () => import('../pages/GateWithCorrugatedBoard/GateWithCorrugatedBoard')
);
const EliteIronGates = lazy(() => import('../pages/EliteIronGates/EliteIronGates'));

export default function RootRouter() {
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route path={RoutersPaths.LOGIN} element={<AuthPage />} />
        <Route path={RoutersPaths.ADMIN} element={<AdminPage />} />
        <Route element={<Layout />}>
          <Route
            path={RoutersPaths.GATEWITHCORRUGATEDBOARD}
            element={<GateWithCorrugatedBoard />}
          />
          <Route path={RoutersPaths.ELITEIRONGATES} element={<EliteIronGates />} />
          <Route path={RoutersPaths.NOFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
