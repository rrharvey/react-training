import * as React from 'react';
import './App.css';
import Alert from './components/Alert';
import Column from './components/Column';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Posts, {PostData} from './components/Posts';
import Row from './components/Row';

const posts: PostData[] = require('./posts.json');

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
            <Posts posts={posts}/>
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
