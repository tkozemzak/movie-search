import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/content/details/Details';

const App = () => {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <Provider store={store}>
      <Router>
        <Header showSearch={showSearch} />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:id/:name/details" render={() => <Details setShowSearch={setShowSearch} />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
