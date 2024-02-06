import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import EliteIronGates from './pages/EliteIronGates/EliteIronGates';
import GateWithCorrugatedBoard from './pages/GateWithCorrugatedBoard/GateWithCorrugatedBoard';
import { HomePage } from './pages/Home.page';
import { RoutersPaths } from './types/enums';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: `/${RoutersPaths.GATEWITHCORRUGATEDBOARD}`,
    element: <GateWithCorrugatedBoard />
  },
  {
    path: `/${RoutersPaths.ELITEIRONGATES}`,
    element: <EliteIronGates />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
