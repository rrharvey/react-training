import * as React from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Column from './components/Column';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Posts from './components/Posts';
import Row from './components/Row';

class App extends React.Component<{}, null> {
  render() {
    return (
      <Container>
        <Header title="React Training" />
        <Jumbotron heading="Jumbotron heading"
          lead="Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        >
          <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
        </Jumbotron>
        <Row className="marketing">
          <Column size="md" span="6">
            <Posts />
          </Column>
          <Column size="md" span="6">
            <Alerts />
          </Column>
        </Row>
        <Footer />
      </Container >
    );
  }
}

export default App;
