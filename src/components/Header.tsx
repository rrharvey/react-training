import * as React from 'react';

const reactLogo = require('./react.svg');

interface HeaderPropTypes {
    title: string;
}

const Header = (props: HeaderPropTypes) => (
    <div className="header clearfix">
        <nav>
            <ul className="nav nav-pills pull-right">
                <li role="presentation" className="active"><a href="#">Home</a></li>
                <li role="presentation"><a href="#">About</a></li>
                <li role="presentation"><a href="#">Contact</a></li>
            </ul>
        </nav>
        <h3 className="text-muted"><img src={reactLogo} className="app-logo" />{props.title}</h3>
    </div>
);

export default Header;
