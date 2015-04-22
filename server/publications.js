Meteor.publish("lessons", function () {
  return Lessons.find();
});

Meteor.publish('comments', function(lessonId) {
	check(lessonId, String);
	return Comments.find({lessonId: lessonId});
});
