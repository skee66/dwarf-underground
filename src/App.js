import React, { Component } from 'react';
import Header from './Header'
import Ad from './Ad'
import Article from './Article'
import OtherArticles from './OtherArticles'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          
          <Article />

          <Ad />

          <OtherArticles />
        </main>

        <Footer />
          </div>
    );
  }
}

export default App;
