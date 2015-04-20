Template.lessonsList.helpers({
  lessons: function () {
    return Lessons.find({}, {sort: {submit: 1}});
  }
});
