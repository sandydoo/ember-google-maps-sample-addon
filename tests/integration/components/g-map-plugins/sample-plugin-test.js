import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | g-map-plugins/sample-plugin', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{g-map-plugins/sample-plugin}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#g-map-plugins/sample-plugin}}
        template block text
      {{/g-map-plugins/sample-plugin}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
