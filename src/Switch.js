/**
 * @file 模拟`switch case`语句
 * @author daxuewen
 */

import {Children} from 'react';
import PropTypes from 'prop-types';
import Case from './Case';
import Default from './Default';

const renderElement = element => (typeof element === 'function' ? element() : element);

const Switch = ({value, children}) => {
    const childrenCount = Children.count(children);
    const lastChild = childrenCount === 1 ? children : children[children.length - 1];
    const defaultChild = lastChild.type === Default ? lastChild : null;

    const cases = children.filter(child => child.type === Case);
    const matchedCase = cases.find(({props}) => {
        if (props.values && props.values.length > 0) {
            return props.values.some(item => item === value);
        }

        return props.value === value;
    });

    if (matchedCase) {
        return renderElement(matchedCase.props.children);
    }

    if (defaultChild) {
        return renderElement(defaultChild.props.children);
    }

    return null;
};

Switch.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default Switch;
