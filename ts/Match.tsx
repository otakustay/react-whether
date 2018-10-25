import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IRenderProp } from './Render';

export interface IMatchProp extends IRenderProp {
  selector: (...args: any[]) => boolean;
}

/* istanbul ignore next line */
const Match: React.SFC<IMatchProp> = () => null;

Match.displayName = 'Match';

Match.propTypes = {
  selector: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default Match;
