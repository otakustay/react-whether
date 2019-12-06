/**
 * @file 空组件，用于给`Switch`使用
 * @author daxuewen
 */

import PropTypes from 'prop-types';

/* istanbul ignore next line */
const Default = () => null;

Default.displayName = 'Default';

Default.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default Default;
