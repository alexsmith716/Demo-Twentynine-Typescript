import { Headers as ServerHeaders } from 'node-fetch';

//	https://github.com/tc39/proposal-global
//	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
//	https://2ality.com/2019/08/global-this.html

//	fetch-headers
//	https://github.com/apollographql/apollo-link-rest/blob/master/docs/rest.md
//	https://github.com/apollographql/apollo-client/blob/master/docs/source/api/link/apollo-link-rest.md
//	https://github.com/apollographql/apollo-client/tree/master/docs/source/api/link/apollo-link-context.md

//	patch the 'global object' in node:
//	https://github.com/node-fetch/node-fetch/#loading-and-configuring-the-module

//	browser implementation of the JavaScript Headers prototype
//	https://github.com/apollographql/apollo-link-rest/issues/182
//	`@rest` directive doesn't work on SSR environment
//	polyfill fetch() on the server

function defineHeaders() {
	global.Headers = !process.env.IS_CLIENT ? ServerHeaders : global.Headers;
}

export default defineHeaders;
