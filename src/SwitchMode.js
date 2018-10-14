/**
 * @file 使用一个上下文和多个条件分支来渲染
 * @author zhanglili
 */

import Render from './Render';

const SwitchMode = ({context, branches}) => {
    const branch = branches.find(({selector}) => selector(context));

    return (
        <Render>
            {branch ? branch.children : null}
        </Render>
    );
};

export default SwitchMode;
