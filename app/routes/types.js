import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  		return Ember.$.getJSON("https://pokeapi.co/api/v2/type/" + params.name)
        .done(function(data) {
          data.pokemon.forEach(poke => {
            var url = poke.pokemon.url;
            var pcs = url.split('/').filter(pc => !!pc);
            var id = pcs.length ? pcs[pcs.length - 1] : '';
            poke.pokemon.id = id;
          });
        });
	}
});
