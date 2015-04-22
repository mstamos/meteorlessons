Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return Meteor.subscribe("lessons")
  }
});

Router.route('/', {
  name: 'lessonsList'
});

Router.route('/lessons/:_id', {
  name: "lessonPage",
  waitOn: function() {
    return Meteor.subscribe('comments', this.params._id);
  },
  data: function() {
    return Lessons.findOne(this.params._id);
  }
});

Router.route('/lessons/:_id/edit', {
  name: 'lessonEdit',
  data: function() { return Lessons.findOne(this.params._id);  }
});

Router.route('/submit', {
  name: 'lessonSubmit'
});


var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only:'lessonPage'});
Router.onBeforeAction(requireLogin, {only: 'lessonSubmit'});
