import * as React from 'react';
import * as classNames from 'classnames';

interface ContainerPropTypes {
    fluid?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Container: React.SFC<ContainerPropTypes> = ({ children, fluid, className}) => (
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
