import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      { name: 'venusaur' },
      { name: 'charmander' },
      { name: 'charmeleon' },
      { name: 'charizard' },
      { name: 'squirtle' },
      { name: 'wartortle' },
      { name: 'blastoise' },
    ];
  },
  parentController: Ember.computed(function() {
    return this.controllerFor('application');
  }),
  setupController: function(controller, model) {
    this._super(controller, model);
    this.get('parentController').set('indexViewIsShown', true);
  },
  deactivate: function() {
    this.get('parentController').set('indexViewIsShown', false);
  }
});
