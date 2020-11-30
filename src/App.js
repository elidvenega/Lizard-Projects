import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Image from './components/image/Image';
import Text from './components/text/Text';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Image />
        <Text />
        <Footer />
      </div>
    );
  }
}

export default App;
