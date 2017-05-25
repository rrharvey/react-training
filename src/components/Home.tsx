import * as React from 'react';
import AddPostForm from './AddPostForm';
import Alerts from './Alerts';
import Column from './Column';
import Count from './Count';
import IncrementButton from './IncrementButton';
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
            <IncrementButton />
        </Jumbotron>
        <Row>
            <Column size="sm" span="12">
                <Count />
            </Column>
        </Row>
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
