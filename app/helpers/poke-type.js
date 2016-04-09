import Ember from 'ember';

export function pokeType([types]/*, hash*/) {
	var sortedTypes = types.sort((a, b) => a.slot - b.slot);
	return sortedTypes
		.map(typeData => typeData.type.name)
		.join(' / ');
}

export default Ember.Helper.helper(pokeType);
