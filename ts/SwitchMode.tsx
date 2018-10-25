import * as React from 'react';
import Render, { IRenderProp } from './Render';
import { IMatchProp } from './Match';

export interface IBranchPropWithSelector extends IRenderProp {
  selector: (...args: any[]) => true;
}

export interface ISwitchModeProp extends IRenderProp {
  branches: Array<IMatchProp | IBranchPropWithSelector>;
  context?: any;
}

const SwitchMode: React.SFC<ISwitchModeProp> = ({
  context,
  branches
}: ISwitchModeProp) => {
  const branch = branches.find(({ selector }) => selector(context));

  return <Render>{branch ? branch.children : null}</Render>;
};

export default SwitchMode;
