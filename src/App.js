import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import ListProvider from './services/ListsContext';
import AppProvider from './hook';

function App() {
  return (

    <BrowserRouter>
      <AppProvider>
        <ListProvider>
          <Routes />
        </ListProvider>
      </AppProvider>
    </BrowserRouter>

  );
}

export default App;
