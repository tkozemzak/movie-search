import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">Redux</div>
    </Provider>
  );
};

export default App;
