import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import MyWork from './components/MyWork';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} exact />
        <Route onUpdate={() => window.scrollTo(0, 0)} path="/resume" component={Resume} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
