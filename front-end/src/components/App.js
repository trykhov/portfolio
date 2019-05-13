import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import MyWork from './MyWork';

class App extends React.Component {


  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <MyWork />
      </div>
    )
  };
}

export default App;
