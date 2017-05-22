import * as React from 'react';
import * as classNames from 'classnames';
import * as OnClickOut from 'react-onclickoutside';

export interface DropdownItem {
    key: string;
    value: string;
}

interface DropdownItemProps {
    item: DropdownItem;
    onClickItem(key: string): void;
}

class DropdownItemWrapper extends React.Component<DropdownItemProps, null> {
    handleClick = () => {
        const { item, onClickItem } = this.props;
        onClickItem(item.key);
    }

    render() {
        return <li><a href="#" onClick={this.handleClick}>{this.props.item.value}</a></li>;
    }
}

interface DropdownProps {
    text: string;
    items: DropdownItem[];
    rightAlign?: boolean;
    onItemSelected(key: string): void;
}

interface DropdownState {
    open: boolean;
}

type ClickOutDropdownProps = DropdownProps & OnClickOut.InjectedOnClickOutProps;

class Dropdown extends React.Component<ClickOutDropdownProps, DropdownState> {
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

    handleClickOutside = () => {
        this.close();
    }

    handleClickItem = (key: string) => {
        this.close();
        this.props.onItemSelected(key);
    }

    render() {
        const { text, items, rightAlign } = this.props;
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
                    {items.map(i => <DropdownItemWrapper key={i.key} item={i} onClickItem={this.handleClickItem} />)}
                </ul>
            </div>
        );
    }
}

export default OnClickOut(Dropdown);
