import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // hardcode Bulbasaur
    return {
      "id": 1,
      "name": "bulbasaur",
      "base_experience": 64,
      "height": 7,
      "is_default": true,
      "order": 1,
      "weight": 69,
    };
  }
});
