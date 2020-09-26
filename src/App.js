import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import ListProvider from './services/ListsContext';

function App() {
  return (

    <ListProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ListProvider>

  );
}

export default App;
