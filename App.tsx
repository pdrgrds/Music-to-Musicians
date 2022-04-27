import React from 'react';
import store from './redux/store';
import { Provider as ReduxProvider } from 'react-redux'
import Index from './modules';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Index />
    </ReduxProvider>
  );
};

export default App;
