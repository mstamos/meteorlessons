Meteor.publish("lessons", function () {
  return Lessons.find();
});

Meteor.publish('comments', function() {
	return Comments.find();
});
