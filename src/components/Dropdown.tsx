import * as React from 'react';
import * as classNames from 'classnames';
// import * as OnClickOut from 'react-onclickoutside';

interface DropdownProps {
    text: string;
    rightAlign?: boolean;
}

interface DropdownState {
    open: boolean;
}

// type ClickOutDropdownProps = DropdownProps & OnClickOut.InjectedOnClickOutProps;

class Dropdown extends React.Component<DropdownProps, DropdownState> {

    private _outerDiv: HTMLElement;

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
        document.addEventListener('click', this.handleClickOutside, true);
        this.setState({ open: true });
    }

    close = () => {
        document.removeEventListener('click', this.handleClickOutside, true);
        this.setState({ open: false });
    }

    handleClickOutside = (e: MouseEvent) => {
        if (this._outerDiv && !this._outerDiv.contains(e.target as Node)) {
            this.close();
        }
    }

    setDropdownRef = (ref: HTMLElement) => this._outerDiv = ref;

    render() {
        const { text, rightAlign } = this.props;
        const { open } = this.state;
        return (
            <div className={classNames('dropdown', { 'open': open })} ref={this.setDropdownRef}>
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

// export default OnClickOut(Dropdown);
export default Dropdown;
