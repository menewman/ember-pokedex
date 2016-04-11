import { weight } from 'pokedex/helpers/weight';
import { module, test } from 'qunit';

module('Unit | Helper | weight');

test('converts input to kilograms and adds units', function(assert) {
	let result = weight([42]);
	assert.strictEqual(result, '4.2 kg');
});

test('rounds the weight to one decimal place', function(assert) {
	let result = weight([4.231]);
	assert.strictEqual(result, '0.4 kg');
});

test('always displays one decimal place, even if digit is 0', function(assert) {
	let result = weight([40]);
	assert.strictEqual(result, '4.0 kg');
});
