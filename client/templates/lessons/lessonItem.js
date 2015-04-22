Template.lessonItem.helpers({
	ownLesson: function () {
		return this.userId === Meteor.userId();
	},
	commentsCount: function() {
		return Comments.find({lessonId: this._id}).count();
	}
});
