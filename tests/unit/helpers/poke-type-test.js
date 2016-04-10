import { pokeType } from 'pokedex/helpers/poke-type';
import { module, test } from 'qunit';

module('Unit | Helper | poke type');

test('it combines types into a string', function(assert) {
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
