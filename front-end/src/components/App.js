import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import MyWork from './MyWork';
import Contact from './Contact';

class App extends React.Component {


  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <MyWork />
        <Contact />
      </div>
    )
  };
}

export default App;
