import * as React from 'react';
import Render, { IRenderProp } from './Render';

export interface IIfModeProp extends IRenderProp {
  matches: boolean;
}

const IfMode: React.SFC<IIfModeProp> = ({
  matches,
  children
}: IIfModeProp): React.ReactElement<any> => (
  <Render>{matches ? children : null}</Render>
);

export default IfMode;