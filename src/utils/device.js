module.exports.getUserAgent = function (ua) {
	return /mobile/i.test(ua) ? 'mobile' : 'desktop';
};

module.exports.isDesktop = function (ua) {
	return !/mobile/i.test(ua);
};

module.exports.isMobile = function (ua) {
	return /mobile/i.test(ua);
};

module.exports.isBot = function (ua) {
	const b = /curl|bot|googlebot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex|crawler|spider|robot|crawling/i;
	return b.test(ua);
};

//	export function getUserAgent(ua) {
//		return /mobile/i.test(ua) ? 'mobile' : 'desktop';
//	}
//
//	export function isDesktop(ua) {
//		return !/mobile/i.test(ua);
//	}
//
//	export function isMobile(ua) {
//		return /mobile/i.test(ua);
//	}
//
//	export function isBot(ua) {
//		const b = /curl|bot|googlebot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex|crawler|spider|robot|crawling/i;
//		return b.test(ua);
//	}
