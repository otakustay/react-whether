/**
 * @file 空组件，用于给`Wether`使用
 * @author zhanglili
 */

import PropTypes from 'prop-types';

const Match = () => null;

Match.propTypes = {
    selector: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default Match;
