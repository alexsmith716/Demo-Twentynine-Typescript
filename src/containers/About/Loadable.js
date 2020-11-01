import React from 'react';
import loadable from '@loadable/component';

const AboutLoadable = loadable(() => import('./About'));

export default AboutLoadable;
