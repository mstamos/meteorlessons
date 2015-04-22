Meteor.publish("lessons", function () {
  return Lessons.find();
});

Meteor.publish('comments', function() {
	check(postId, String);
	return Comments.find({postId: postId});
});
