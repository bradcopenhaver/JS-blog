import Ember from 'ember';

export default Ember.Component.extend({
  newPostForm: false,
  actions: {
    newPostForm() {
      this.set('newPostForm', true);
    },
    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text')
      };
      this.set('newPostForm', false);
      this.sendAction('save', params);
    }
  }
});
