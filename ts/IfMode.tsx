import * as React from 'react';
import * as PropTypes from 'prop-types';
import Render, { IRenderProp } from './Render';

export interface IIfModeProp extends IRenderProp {
    matches: boolean;
}

const IfMode: React.SFC<IIfModeProp> = ({ matches, children }): React.ReactElement<any> => (
    <Render>{matches ? children : null}</Render>
);

IfMode.propTypes = {
    matches: PropTypes.bool as PropTypes.Validator<boolean>,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default IfMode;
