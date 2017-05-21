import * as React from 'react';
import './App.css';
import Alert from './components/Alert';
import Column from './components/Column';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Post from './components/Post';
import Row from './components/Row';

class App extends React.Component<{}, null> {
  render() {
    return (
      <Container>
        <Header />
        <Jumbotron />
        <Row className="marketing">
          <Column size="md" span="6">
            <Post />
            <Post />
            <Post />
          </Column>
          <Column size="md" span="6">
            <Alert />
            <Alert />
            <Alert />
            <Alert />
          </Column>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default App;
