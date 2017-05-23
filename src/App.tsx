import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component<{}, null> {
  render() {
    return (
      <Router>
        <Container>
          <Header title="React Training" />
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" render={() => <h1>About Us</h1>} />
          <Route path="/contact" render={() => <h1>Contact Us</h1>} />
          <Footer />
        </Container >
      </Router>
    );
  }
}

export default App;
