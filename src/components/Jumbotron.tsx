import * as React from 'react';

interface JumbotronPropTypes {
    heading: string;
    lead?: string;
    children?: React.ReactNode;
}

const Jumbotron = ({ heading, lead, children }: JumbotronPropTypes) => (
    <div className="jumbotron">
        <h1>{heading}</h1>
        <p className="lead">{lead}</p>
        {children}
    </div>
);

export default Jumbotron;
