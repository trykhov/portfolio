import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import MyWork from './MyWork';
import AboutMe from './AboutMe';
import Contact from './Contact';
import ReactGA from 'react-ga';


ReactGA.initialize('UA-140490976-2');
ReactGA.pageview('/');

class App extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    ReactGA.event({
      category: this.props.history.location.hash,
      action: "Pressed"
    })
    return (
      <div>
        <Navigation />
        <Header />
        <MyWork />
        <AboutMe />
        <Contact />
      </div>
    )
  };
}

export default App;
