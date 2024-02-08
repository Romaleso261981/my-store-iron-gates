import { MantineProvider } from '@mantine/core';
import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootRouter from './RootRouter';
import { myTheme } from './theme';

const App: FC = () => {
  return (
    <BrowserRouter>
      <MantineProvider theme={myTheme} defaultColorScheme="light">
        <RootRouter />
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
