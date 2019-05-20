import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Resume from './components/Resume';
import EmailSent from './components/EmailSent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

const store = createStore(reducers);

// ReactGA.initialize('UA-140490976-2');
// ReactGA.pageview('/');
// ReactGA.pageview('/resume');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} exact />
        <Route onUpdate={() => window.scrollTo(0, 0)} path="/resume" component={Resume} />
        <Route path="/email-confirmation" component={EmailSent} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
