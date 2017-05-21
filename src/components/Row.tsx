import * as React from 'react';
import * as classNames from 'classnames';

interface RowPropTypes {
    className: string;
    children: React.ReactNode;
}

const Row = (props: RowPropTypes) => 
    <div className={classNames('row', props.className)}>{props.children}</div>;

export default Row;
