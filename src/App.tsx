import * as React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from './components/Container';
import Count from './components/Count';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ImcrementButton from './components/IncrementButton';

class App extends React.Component<{}, null> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Header title="React Training" />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" render={() => <div><h1>About Us</h1><Count /><ImcrementButton /></div>} />
            <Route path="/contact" render={() => <h1>Contact Us</h1>} />
            <Footer />
          </Container >
        </Router>
      </Provider>
    );
  }
}

export default App;
