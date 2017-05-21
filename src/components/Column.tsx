import * as React from 'react';
import * as classNames from 'classnames';

type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
    '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
type ColumnResponsiveSize = 'xs' | 'sm' | 'md' | 'lg';

interface ColumnProps {
    size: ColumnResponsiveSize;
    span: ColumnSpan;
    className?: string;
}

const Column: React.SFC<ColumnProps> = ({ span, size, className, children }) =>
    <div className={classNames(`col-${size}-${span}`, className)}>{children}</div>;

export default Column;
