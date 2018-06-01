/**
 * @file 仅一个分支的渲染模式
 * @author zhanglili
 */

import Render from './Render';

const IfMode = ({matches, children}) => (
    <Render>
        {matches ? children : null}
    </Render>
);

export default IfMode;
