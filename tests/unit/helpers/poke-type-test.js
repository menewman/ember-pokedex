import { pokeType } from 'pokedex/helpers/poke-type';
import { module, test } from 'qunit';

module('Unit | Helper | poke type');

test('it outputs a single type as a capitalized string', function(assert) {
	let types = [{ slot: 1, type: { name: 'fire' } }];
	let result = pokeType([types]);
	assert.strictEqual(result, 'Fire');
});

test('it combines two types into a slash-delimited string', function(assert) {
	let types = [{
		slot: 2,
		type: { name: 'grass' }
	},
	{
		slot: 1,
		type: { name: 'poison' }
	}];

	let result = pokeType([types]);
 	assert.strictEqual(result, 'Poison / Grass');
});
