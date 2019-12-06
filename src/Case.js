/**
 * @file 空组件，用于给`Switch`使用
 * @author daxuewen
 */

import PropTypes from 'prop-types';

/* istanbul ignore next line */
const Case = () => null;

Case.displayName = 'Case';

Case.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    value: PropTypes.any,
    values: PropTypes.array
};

Case.defaultProps = {
    value: undefined,
    values: []
};

export default Case;
