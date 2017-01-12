import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if(confirm('Are your sure?')) {
        this.sendAction('destroyComment', comment);
      }
    },
    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params);
    }
  }
});
