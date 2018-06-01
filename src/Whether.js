/**
 * @file 用于代JSX中的`if`判断的组件
 * @author zhanglili
 */

/* eslint-disable react/require-default-props */

import {Children} from 'react';
import PropTypes from 'prop-types';
import Match from './Match';
import Else from './Else';
import IfMode from './IfMode';
import IfElseMode from './IfElseMode';
import SwitchMode from './SwitchMode';

const elementToBranch = ({type, props}) => {
    if (type === Match) {
        return props;
    }

    return {
        selector() {
            return true;
        },
        children: props.children
    };
};

const Whether = ({context, matches, children}) => {
    const elements = Children.toArray(children);

    if (typeof matches !== 'boolean') {
        const branches = elements.map(elementToBranch);
        return <SwitchMode context={context} branches={branches} />;
    }


    const lastElement = elements[elements.length - 1];

    if (lastElement.type === Else) {
        return (
            <IfElseMode
                matches={matches}
                ifChildren={elements.slice(0, -1)}
                elseChildren={lastElement.props.children}
            />
        );
    }

    return (
        <IfMode matches={matches}>
            {children}
        </IfMode>
    );
};

Whether.propTypes = {
    context: PropTypes.any,
    matches: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default Whether;
