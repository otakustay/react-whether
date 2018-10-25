import * as React from 'react';
import * as PropTypes from 'prop-types'
import { IRenderProp } from './Render';

export interface IElseProp extends IRenderProp {}

/* istanbul ignore next line */
const Else: React.SFC<IElseProp> = () => null;

Else.displayName = 'Else';

Else.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default Else;
