import * as React from 'react';
import Render, {RenderChildren} from './Render';
import {IfModeProp} from './IfMode';

interface IfElseModeProp extends IfModeProp {
    ifChildren: RenderChildren;
    elseChildren: RenderChildren;
}

const IfElseMode: React.SFC<IfElseModeProp> = ({matches, ifChildren, elseChildren}): React.ReactElement<any> => (
    <Render>{matches ? ifChildren : elseChildren}</Render>
);

export default IfElseMode;
