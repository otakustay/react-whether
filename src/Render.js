/**
 * @file 兼容不同类型的children的渲染
 * @author zhanglili
 */

const Render = ({children}) => {
    if (typeof children === 'function') {
        return children();
    }

    return children;
};

Render.displayName = 'Render';

export default Render;
