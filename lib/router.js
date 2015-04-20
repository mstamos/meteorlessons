Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return Meteor.subscribe("lessons");
  }
});

Router.route('/', {
  name: 'lessonsList'
});

Router.route('/lessons/:_id', {
  name: "lessonPage",
  data: function() {
    return Lessons.findOne(this.params._id);
  }
});

Router.onBeforeAction('dataNotFound', {only:'lessonPage'});
