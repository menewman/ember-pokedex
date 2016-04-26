import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  		return Ember.$.getJSON("http://pokeapi.co/api/v2/pokemon-species/" + params.name);
	}
});
