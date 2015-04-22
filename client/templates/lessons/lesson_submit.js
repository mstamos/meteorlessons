Template.lessonSubmit.onCreated(function() {
  Session.set('lessonSubmitErrors', {});

});
Template.lessonSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('lessonSubmitErrors')[field];

  },
  errorClass: function (field) {
    return !!Session.get('lessonSubmitErrors')[field] ? 'has-error' : '';

  }

});

Template.lessonSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var lesson = {
      title: $(e.target).find('[name=title]').val(),
      time: $(e.target).find('[name=time]').val(),
      date: $(e.target).find('[name=date]').val(),
      location: $(e.target).find('[name=location]').val(),
      description: $(e.target).find('[name=description]').val()
    };

    var errors = validatePost(lesson);
    if (errors.title || errors.time || errors.date || errors.description || errors.presentationUrl || errors.location)
      return Session.set('lessonSubmitErrors', errors);

   Meteor.call('lessonInsert', lesson, function(error, result) {
     // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      // show this result but route anyway
      if (result.lessonExists)
         throwError('This lesson has already been published');
      Router.go('lessonPage', {_id: result._id});
   });
  }
});
