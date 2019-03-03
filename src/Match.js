/**
 * @file 空组件，用于给`Wether`使用
 * @author zhanglili
 */

import PropTypes from 'prop-types';

/* istanbul ignore next line */
const Match = () => null;

Match.displayName = 'Match';

Match.propTypes = {
    selector: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default Match;
