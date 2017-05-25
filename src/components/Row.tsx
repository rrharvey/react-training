import * as React from 'react';
import * as classNames from 'classnames';

interface RowProps {
    className?: string;
    children?: React.ReactNode;
}

const Row = (props: RowProps) => 
    <div className={classNames('row', props.className)}>{props.children}</div>;

export default Row;
