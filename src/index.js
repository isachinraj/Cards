import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Promise from 'redux-promise';
import reducers from './reducers';
import Cards from './components/cards';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path="/cards/:pageId/:category/:cardsPerPage" component={Cards} />
          <Route path="/cards/:pageId/:category" component={Cards} />
          <Route path="/cards/:pageId" component={Cards} />
          <Route path="/" component={Cards} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>
    , document.querySelector('#app'));
