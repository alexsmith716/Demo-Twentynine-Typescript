global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;

require('./express');
