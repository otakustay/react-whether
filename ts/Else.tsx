import * as React from 'react';
import { IRenderProp } from './Render';

export interface IElseProp extends IRenderProp {}

const Else: React.SFC<IElseProp> = () => null;

Else.displayName = 'Else';

export default Else;
