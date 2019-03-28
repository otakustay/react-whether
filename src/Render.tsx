import * as React from 'react';

export declare type RenderFunction = () => React.ReactNode;
export declare type RenderChildren = RenderFunction | React.ReactNode;

export const isRenderFunc = (children: any): children is RenderFunction => {
    return typeof children === 'function';
};

export interface RenderProp {
    children?: RenderChildren;
}

const Render: React.SFC<RenderProp> = ({children}): React.ReactElement<any> => {
    return <>{isRenderFunc(children) ? children() : children}</>;
};

Render.displayName = 'Render';

export default Render;
