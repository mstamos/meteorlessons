Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    return Meteor.subscribe("lessons");
  }
});

Router.route('/', {
  name: 'lessonsList'
});
