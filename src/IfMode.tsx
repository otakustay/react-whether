import * as React from 'react';
import PropTypes from 'prop-types';
import Render, {RenderProp} from './Render';

export interface IfModeProp extends RenderProp {
    matches?: boolean;
}

const IfMode: React.SFC<IfModeProp> = ({matches, children}): React.ReactElement<any> => (
    <Render>{matches ? children : null}</Render>
);

IfMode.propTypes = {
    matches: PropTypes.bool as PropTypes.Validator<boolean>,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default IfMode;
