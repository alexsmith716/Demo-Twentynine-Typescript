import sum from './sum';

//	https://github.com/facebook/jest/blob/master/docs/UsingMatchers.md

//	Jest uses "matchers" to test values in different ways
//	below are commonly used matchers

//	simplest way to test a value is with exact equality
//	use 'expect' and 'toBe' to test that two values were exactly identical
//	'expect(sum(1, 2))' returns an "expectation" object
test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

//	'toBe' uses 'Object.is' to test exact equality
//	to check the value of an object, use 'toEqual' instead
test('object assignment', () => {
	const data = { one: 1 };
	data['two'] = 2;
	expect(data).toEqual({ one: 1, two: 2 });
});

//	'toEqual' recursively checks every field of an object or array
//	test for the opposite of a matcher
test('adding positive numbers is not zero', () => {
	for (let a = 1; a < 10; a++) {
		for (let b = 1; b < 10; b++) {
			expect(a + b).not.toBe(0);
		}
	}
});

//	Truthiness:
test('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});

test('zero', () => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined();
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy();
});

//	Numbers:
test('two plus two', () => {
	const value = 2 + 2;
	expect(value).toBeGreaterThan(3);
	expect(value).toBeGreaterThanOrEqual(3.5);
	expect(value).toBeLessThan(5);
	expect(value).toBeLessThanOrEqual(4.5);

	// toBe and toEqual are equivalent for numbers
	expect(value).toBe(4);
	expect(value).toEqual(4);
});

//	Strings:
//	check strings against regular expressions with 'toMatch'
test('there is no I in team', () => {
	expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
	expect('Christoph').toMatch(/stop/);
});

//	Arrays and iterables:
//	check if an array or iterable contains a particular item using 'toContain'
const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer'];

test('the shopping list has beer on it', () => {
	expect(shoppingList).toContain('beer');
	/* eslint-disable-next-line no-undef */
	expect(new Set(shoppingList)).toContain('beer');
});

//	Exceptions:
//	test whether a particular function throws an error when it's called using 'toThrow'
function compileAndroidCode() {
	throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
	expect(compileAndroidCode).toThrow();
	expect(compileAndroidCode).toThrow(Error);

	// You can also use the exact error message or a regexp
	expect(compileAndroidCode).toThrow('you are using the wrong JDK');
	expect(compileAndroidCode).toThrow(/JDK/);
});
