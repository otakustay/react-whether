import * as React from 'react';
import PropTypes from 'prop-types';
import {RenderProp} from './Render';

/* istanbul ignore next line */
const Else: React.SFC<RenderProp> = () => null;

Else.displayName = 'Else';

Else.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default Else;
