import Route from '@ember/routing/route';
import Changeset from 'ember-changeset';

export default class ApplicationRoute extends Route {
  async model() {
    const model = this.store.createRecord('foo');

    const changeset = new Changeset(model, function() {
      return false;
    });

    const casted = changeset.cast(['title', 'body']);

    await casted.validate();
    await changeset.validate();

    console.log('casted.isValid: ' + casted.get('isValid'));
    console.log('changeset.isValid: ' + changeset.get('isValid'));
  }
}
