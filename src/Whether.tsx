import * as React from 'react';
import PropTypes from 'prop-types';
import Else from './Else';
import IfElseMode from './IfElseMode';
import Match, {MatchProp} from './Match';
import IfMode, {IfModeProp} from './IfMode';
import SwitchMode, {BranchPropWithSelector} from './SwitchMode';

const elementToBranch = ({type, props}: React.ReactElement<any>): MatchProp | BranchPropWithSelector => {
    if (type === Match) {
        return props;
    }

    return {
        selector() {
            return true;
        },
        children: props.children,
    };
};

export interface WhetherProp extends IfModeProp {
    context?: any;
}

const Whether: React.SFC<WhetherProp> = ({context, matches, children}) => {
    const {Children} = React;
    if (typeof matches !== 'boolean') {
        const elements = Children.toArray(children) as Array<React.ReactElement<any>>;
        const branches = elements.map(elementToBranch);
        return <SwitchMode context={context} branches={branches} />;
    }

    const childrenCount = Children.count(children);

    if (childrenCount <= 1) {
        return <IfMode matches={matches}>{children}</IfMode>;
    }

    const elements = Children.toArray(children);
    const lastElement = elements[elements.length - 1] as React.ReactElement<any>;

    if (lastElement.type === Else) {
        return (
            <IfElseMode
                matches={matches}
                ifChildren={elements.slice(0, -1)}
                elseChildren={lastElement.props.children}
            />
        );
    }

    return <IfMode matches={matches}>{children}</IfMode>;
};

Whether.propTypes = {
    context: PropTypes.any,
    // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/28016
    matches: PropTypes.bool as PropTypes.Validator<boolean>,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default Whether;
