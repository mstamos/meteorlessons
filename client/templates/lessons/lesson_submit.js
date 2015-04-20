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
   lesson._id = Lessons.insert(lesson);
   Router.go('lessonPage', lesson);
  }
});
