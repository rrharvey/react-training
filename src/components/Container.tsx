import * as React from 'react';
import * as classNames from 'classnames';

interface ContainerProps {
    fluid?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Container: React.SFC<ContainerProps> = ({ children, fluid, className}) => (
    <div className={classNames(className, {
        'container': !fluid,
        'container-fluid': fluid
    })}>
        {children}
    </div>
);

Container.defaultProps = {
    fluid: false
};

export default Container;
