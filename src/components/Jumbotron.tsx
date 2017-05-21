import * as React from 'react';

interface JumbotronPropTypes {
}

const Jumbotron = (props: JumbotronPropTypes) => (
    <div className="jumbotron">
        <h1>Jumbotron heading</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
    </div>
);

export default Jumbotron;
