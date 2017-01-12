import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    updateComment(comment) {
      var params = {
        author: this.get('author'),
        text: this.get('text')
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
