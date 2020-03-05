import Model, { attr } from '@ember-data/model';

export default class FooModel extends Model {
  @attr title;
  @attr body;
}
