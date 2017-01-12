import Ember from 'ember';

export default Ember.Component.extend({
  newCommentForm: false,
  actions: {
    newCommentForm() {
      this.set('newCommentForm', true);
    },
    saveComment() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        post: this.get('post')
      };
      this.set('newCommentForm', false);
      this.sendAction('saveComment', params);
    }
  }
});
