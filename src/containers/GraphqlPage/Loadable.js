import React from 'react';
import loadable from '@loadable/component';

const GraphqlPageLoadable = loadable(() => import('./GraphqlPage'));

export default GraphqlPageLoadable;
