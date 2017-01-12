import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    delete(post) {
      if (confirm('Are your sure you want to delete')) {
        post.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
