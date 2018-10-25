import * as React from 'react';
import Else from './Else';
import IfElseMode from './IfElseMode';
import Match, { IMatchProp } from './Match';
import IfMode, { IIfModeProp } from './IfMode';
import SwitchMode, { IBranchPropWithSelector } from './SwitchMode';

const elementToBranch = ({
  type,
  props
}: React.ReactElement<any>): IMatchProp | IBranchPropWithSelector => {
  if (type === Match) {
    return props;
  }

  return {
    selector() {
      return true;
    },
    children: props.children
  };
};

export interface IWhetherProp extends IIfModeProp {
  context?: any;
}

const Whether: React.SFC<IWhetherProp> = ({
  context,
  matches,
  children
}: IWhetherProp) => {
  const { Children } = React;
  if (typeof matches !== 'boolean') {
    const elements = Children.toArray(children) as React.ReactElement<any>[];
    const branches = elements.map(elementToBranch);
    return <SwitchMode context={context} branches={branches} />;
  }

  const childrenCount = Children.count(children);

  if (childrenCount <= 1) {
    return <IfMode matches={matches}>{children}</IfMode>;
  }

  const elements = Children.toArray(children);
  const lastElement = elements[elements.length - 1] as React.ReactElement<any>;

  if (lastElement.type === Else) {
    return (
      <IfElseMode
        matches={matches}
        ifChildren={elements.slice(0, -1)}
        elseChildren={lastElement.props.children}
      />
    );
  }

  return <IfMode matches={matches}>{children}</IfMode>;
};

export default Whether;
