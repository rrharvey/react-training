import * as React from 'react';
import * as classNames from 'classnames';

interface DropdownProps {
    text: string;
    rightAlign?: boolean;
}

interface DropdownState {
    open: boolean;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    toggleOpen = () => {
        this.state.open
            ? this.close()
            : this.open();
    }

    open = () => {
        this.setState({ open: true });
    }

    close = () => {
        this.setState({ open: false });
    }

    render() {
        const { text, rightAlign } = this.props;
        const { open } = this.state;
        return (
            <div className={classNames('dropdown', { 'open': open })}>
                <button type="button"
                    className="btn btn-default dropdown-toggle"
                    onClick={this.toggleOpen}
                >
                    {text} <span className="caret" />
                </button>
                <ul className={classNames('dropdown-menu', { 'dropdown-menu-right': rightAlign })}>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider" />
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
        );
    }
}

export default Dropdown;
