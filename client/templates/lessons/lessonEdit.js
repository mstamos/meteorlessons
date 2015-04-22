Template.lessonEdit.onCreated(function() {
  Session.set('lessonEditErrors', {});

});
Template.lessonEdit.helpers({
  errorMessage: function(field) {
    return Session.get('lessonEditErrors')[field];

  },
  errorClass: function (field) {
    return !!Session.get('lessonEditErrors')[field] ? 'has-error' : '';

  }

});

Template.lessonEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var currentLessonId = this._id;
    var lessonProperties = {
      title: $(e.target).find('[name=title]').val(),
      time: $(e.target).find('[name=time]').val(),
      date: $(e.target).find('[name=date]').val(),
      location: $(e.target).find('[name=location]').val(),
      presentationUrl: $(e.target).find('[name=presentationUrl]').val(),
      description: $(e.target).find('[name=description]').val()
    };

    var errors = validateLesson(lessonProperties);
    if (errors.title || errors.time || errors.date || errors.description || errors.presentationUrl || errors.location)
      return Session.set('lessonEditErrors', errors);

    Lessons.update(currentLessonId, {$set: lessonProperties}, function(error) {
      if (error) {
        console.log(error);
        // display the error to the user
        throwError(error.reason);
        
      } else {
        Router.go('lessonPage', {_id: currentLessonId});
      }
    });
  },
  'click .delete': function(e) {
    e.preventDefault();
    if (confirm("Delete this lesson?")) {
      var currentLessonId = this._id;
      Lessons.remove(currentLessonId);
      Router.go('lessonsList');

    }
  }
});
