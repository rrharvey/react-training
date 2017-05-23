import * as React from 'react';
import AddPostForm from './AddPostForm';
import Alerts from './Alerts';
import Column from './Column';
import Jumbotron from './Jumbotron';
import Posts from './Posts';
import Row from './Row';

interface HomeProps {
}

const Home: React.SFC<HomeProps> = (props) => (
    <div>
        <Jumbotron heading="Jumbotron heading"
            lead="Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        >
            <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
        </Jumbotron>
        <Row className="marketing">
            <Column size="sm" span="6">
                <AddPostForm />
                <Posts />
            </Column>
            <Column size="sm" span="6">
                <Alerts />
            </Column>
        </Row>
    </div>
);

export default Home;
