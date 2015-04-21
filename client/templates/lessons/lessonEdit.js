Template.lessonEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var currentLesonId = this._id;
    var lessonProperties = {
      title: $(e.target).find('[name=title]').val(),
      time: $(e.target).find('[name=time]').val(),
      date: $(e.target).find('[name=date]').val(),
      location: $(e.target).find('[name=location]').val(),
      description: $(e.target).find('[name=description]').val()
    };
    Lessons.update(currentLessonId, {$set: lesonProperties}, function(error) {
      if (error) {
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
