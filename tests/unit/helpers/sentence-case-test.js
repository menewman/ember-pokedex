import { sentenceCase } from 'pokedex/helpers/sentence-case';
import { module, test } from 'qunit';

module('Unit | Helper | sentence case');

test('it returns the empty string if input is null', function(assert) {
  let result = sentenceCase([null]);
  assert.strictEqual(result, '', 'Result of null should be empty');
});

test('it capitalizes the first letter of the string', function(assert) {
	let result = sentenceCase(['inputstring']);
	assert.strictEqual(result, 'Inputstring');
});

test('it lower-cases subsequent letters of the string', function(assert) {
	let result = sentenceCase(['iNPUTSTRING']);
	assert.strictEqual(result, 'Inputstring');
});
