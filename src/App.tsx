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
        <Header title="React Training" />
        <Jumbotron heading="Jumbotron heading"
          lead="Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        >
          <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
        </Jumbotron>
        <Row className="marketing">
          <Column size="md" span="6">
            <Post title="ea molestias quasi exercitationem"
              body={`et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad 
                     voluptatem \doloribus vel accusantium quis pariatur molestiae porro 
                     eius odio et labore et velit aut`} />
            <Post title="ea molestias quasi exercitationem"
              body={`et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad 
                     voluptatem \doloribus vel accusantium quis pariatur molestiae porro 
                     eius odio et labore et velit aut`} />
            <Post title="ea molestias quasi exercitationem"
              body={`et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad 
                     voluptatem \doloribus vel accusantium quis pariatur molestiae porro 
                     eius odio et labore et velit aut`} />
          </Column>
          <Column size="md" span="6">
            <Alert title="Heads up!"
              body="This alert needs your attention, but it's not super important."
              dismissable={true} />
            <Alert title="Heads up!" body="This alert needs your attention, but it's not super important." />
            <Alert title="Heads up!" body="This alert needs your attention, but it's not super important." />
            <Alert title="Heads up!" body="This alert needs your attention, but it's not super important." />
          </Column>
        </Row>
        <Footer />
      </Container >
    );
  }
}

export default App;
