/**
 * @file 两个分支的渲染
 * @author zhanglili
 */

import Render from './Render';

const IfElseMode = ({matches, ifChildren, elseChildren}) => (
    <Render>
        {matches ? ifChildren : elseChildren}
    </Render>
);

export default IfElseMode;
