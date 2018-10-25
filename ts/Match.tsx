import * as React from 'react';
import { IRenderProp } from './Render';

export interface IMatchProp extends IRenderProp {
  selector: (...args: any[]) => boolean;
}

const Match: React.SFC<IMatchProp> = () => null;

Match.displayName = 'Match';

export default Match;
