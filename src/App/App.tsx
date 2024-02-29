import { MantineProvider } from '@mantine/core';
import type { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@/redux/store';

import RootRouter from './RootRouter';
import { myTheme } from './theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider theme={myTheme} defaultColorScheme="light">
          <RootRouter />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
