import { zeroPad } from 'pokedex/helpers/zero-pad';
import { module, test } from 'qunit';

module('Unit | Helper | zero pad');

test('pads with zeros to the desired length', function(assert) {
  let result = zeroPad([42, 3]);
  assert.strictEqual(result, '042');
});

test('does not pad with zeros if input length equals desired length', function(assert) {
	let result = zeroPad([42, 2]);
	assert.strictEqual(result, '42');
});

test('does not pad with zeros if input length exceeds desired length', function(assert) {
	let result = zeroPad([42, 1]);
	assert.strictEqual(result, '42');
});
