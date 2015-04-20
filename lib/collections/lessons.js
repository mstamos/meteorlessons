Lessons = new Meteor.Collection("lessons");


Meteor.methods({
  lessonInsert: function(lessonAttributes) {
    check(Meteor.userId(), String);
    check(lessonAttributes, {
      title: String,
      time: String,
      date: String,
      location: String,
      description: String
    });
    var user = Meteor.user();
    var lesson = _.extend(lessonAttributes, {
      userId: user._id,
      submitted: new Date()
    });

    var lessonId = Lessons.insert(lesson);
    return {
      _id: lessonId
    };
  }
});
