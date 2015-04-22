Comments = new Mongo.Collection('comments');

Meteor.methods({
	commentInsert: function(commentAttributes) {
		check(this.userId, String);
		check(commentAttributes, {
			lessonId: String,
			body: String
		});
		var user = Meteor.user();
		var lesson = Lessons.findOne(commentAttributes.lessonId);
		if (!lesson)
			throw new Meteor.Error('invalid-comment', 'You must comment on a lesson');
		comment = _.extend(commentAttributes, {
				userId: user._id,
				author: user.username,
				submitted: new Date()
			});
		return Comments.insert(comment);
	}
});