import * as React from 'react';
import Render, {RenderProp} from './Render';
import {MatchProp} from './Match';

export interface BranchPropWithSelector extends RenderProp {
    selector: (...args: any[]) => true;
}

export interface SwitchModeProp extends RenderProp {
    branches: Array<MatchProp | BranchPropWithSelector>;
    context?: any;
}

const SwitchMode: React.SFC<SwitchModeProp> = ({context, branches}) => {
    const branch = branches.find(({selector}) => selector(context));

    return <Render>{branch ? branch.children : null}</Render>;
};

export default SwitchMode;
