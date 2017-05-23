import * as React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
const reactLogo = require('./react.svg');

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => (
    <div className="header clearfix">
        <nav>
            <ul className="nav nav-pills pull-right">
                <li role="presentation"><NavLink exact={true} activeClassName="active" to="/">Home</NavLink></li>
                <li role="presentation"><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li role="presentation"><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        <h3 className="text-muted"><img src={reactLogo} className="app-logo" />{props.title}</h3>
    </div>
);

export default Header;
