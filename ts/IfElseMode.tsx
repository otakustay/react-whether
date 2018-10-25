import * as React from 'react';
import Render, { RenderChildren } from './Render';
import { IIfModeProp } from './IfMode';

interface IIfElseModeProp extends IIfModeProp {
  ifChildren: RenderChildren;
  elseChildren: RenderChildren;
}

const IfElseMode: React.SFC<IIfElseModeProp> = ({
  matches,
  ifChildren,
  elseChildren
}: IIfElseModeProp): React.ReactElement<any> => (
  <Render>{matches ? ifChildren : elseChildren}</Render>
);

export default IfElseMode;
