import Ember from 'ember';

export default Ember.Route.extend({
	model() {
  		// hardcode bulbasaur
		return {
			"id": 1,
			"name": "bulbasaur",
		};
	}
});
