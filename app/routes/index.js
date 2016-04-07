import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 1, name: 'bulbasaur' },
      { id: 4, name: 'charmander' },
      { id: 7, name: 'squirtle' }
    ];
  }
});
