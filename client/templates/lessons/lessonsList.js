Template.lessonsList.helpers({
  lessons: function () {
    return Lessons.find();
  }
});
