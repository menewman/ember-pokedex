import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pokemon', {
    path: 'pokemon/:name'
  });

  this.route('types', {
    path: 'types/:name'
  });

  this.route('moves', {
    path: 'moves/:name'
  });

  this.route('generation', {
    path: 'generation/:name'
  });

  this.route('species', {
    path: 'species/:name'
  });
});

export default Router;
