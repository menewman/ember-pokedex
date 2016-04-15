import { pokeType } from 'pokedex/helpers/poke-type';
import { module, test } from 'qunit';

module('Unit | Helper | poke type');

test('it maps types into an array of type names, sorted by slot', function(assert) {
	let types = [{
		slot: 2,
		type: { name: 'grass' }
	},
	{
		slot: 1,
		type: { name: 'poison' }
	}];

	let result = pokeType([types]);
 	assert.deepEqual(result, ['poison', 'grass']);
});
