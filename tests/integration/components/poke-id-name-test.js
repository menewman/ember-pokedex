import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('poke-id-name', 'Integration | Component | poke id name', {
  integration: true
});

test('it renders when passed an object with id and name', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('poke', { id: 4, name: 'charmander' });
  this.render(hbs`{{poke-id-name monster=poke}}`);

  assert.equal(this.$().text().trim(), '#004: Charmander');
});
