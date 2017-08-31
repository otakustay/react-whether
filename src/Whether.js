/**
 * @file 用于代JSX中的`if`判断的组件
 * @author zhanglili
 */

import {Children} from 'react';
import PropTypes from 'prop-types';
import Match from './Match';
import Else from './Else';

const renderElement = element => (typeof element === 'function' ? element() : element);

const Whether = ({context, matches, children}) => {
    const childrenCount = Children.count(children);
    const firstChild = childrenCount === 1 ? children : children[0];
    const lastChild = childrenCount === 1 ? children : children[children.length - 1];
    const elseChild = lastChild.type === Else ? lastChild : null;

    if (typeof matches === 'boolean') {
        return matches
            ? renderElement(firstChild)
            : (elseChild ? renderElement(elseChild.props.children) : null);
    }

    const matched = children.filter(child => child.type === Match).find(({props}) => props.selector(context));
    if (matched) {
        return renderElement(matched.props.children);
    }

    if (elseChild) {
        return renderElement(elseChild.props.children);
    }

    return null;
};

Whether.propTypes = {
    context: PropTypes.any,
    matches: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default Whether;
