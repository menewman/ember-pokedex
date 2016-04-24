import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 1, name: 'bulbasaur' },
      { id: 2, name: 'ivysaur' },
      { id: 3, name: 'venusaur' },
      { id: 4, name: 'charmander' },
      { id: 5, name: 'charmeleon' },
      { id: 6, name: 'charizard' },
      { id: 7, name: 'squirtle' },
      { id: 8, name: 'wartortle' },
      { id: 9, name: 'blastoise' },
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
