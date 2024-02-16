import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spiner } from '@/shared/components/Loader/Loader';
import { RoutersPaths } from '@/shared/types/enums';

import { Layout } from './layout';

const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const KovaniGrati = lazy(() => import('../pages/KovaniGrati/KovaniGrati'));
const KozirkiPage = lazy(() => import('../pages/KozirkiPage/KozirkiPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const PricingPage = lazy(() => import('../pages/PricingPage/PricingPage'));
const CommunityPage = lazy(() => import('../pages/CommunityPage/CommunityPage'));
const AdressPage = lazy(() => import('../pages/AdressPage/AdressPage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const CardDetail = lazy(() => import('../pages/CardDetail/CardDetail'));
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
          <Route path={RoutersPaths.MAIN} element={<MainPage />} />
          <Route path={RoutersPaths.ABOUT} element={<AboutPage />} />
          <Route path={RoutersPaths.CARDDETAIL} element={<CardDetail />} />
          <Route path={RoutersPaths.ADRESS} element={<AdressPage />} />
          <Route path={RoutersPaths.COMMUNITY} element={<CommunityPage />} />
          <Route path={RoutersPaths.PRICING} element={<PricingPage />} />
          <Route path={RoutersPaths.VOROTAPROFNASTILOM} element={<GateWithCorrugatedBoard />} />
          <Route path={RoutersPaths.KOVANIKOZIRKI} element={<KozirkiPage />} />
          <Route path={RoutersPaths.KOVANIGRATI} element={<KovaniGrati />} />
          <Route path={RoutersPaths.ELITNIKOVANIVOROTA} element={<EliteIronGates />} />
          <Route path={RoutersPaths.NOFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
