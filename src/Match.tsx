import * as React from 'react';
import PropTypes from 'prop-types';
import {RenderProp} from './Render';

export interface MatchProp extends RenderProp {
    selector: (...args: any[]) => boolean;
}

/* istanbul ignore next line */
const Match: React.SFC<MatchProp> = () => null;

Match.displayName = 'Match';

Match.propTypes = {
    selector: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default Match;
