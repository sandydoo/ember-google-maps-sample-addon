import MapComponent from 'ember-google-maps/components/g-map/map-component';
import layout from '../../templates/components/g-map-plugins/sample-plugin';

export default MapComponent.extend({
  layout,

  _type: 'samplePlugin'
});
