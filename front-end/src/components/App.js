import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import MyWork from './MyWork';
import AboutMe from './AboutMe';
import Contact from './Contact';


class App extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
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
