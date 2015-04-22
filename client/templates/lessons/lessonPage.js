Template.lessonPage.helpers({
	comments: function() {
		return Comments.find({lessonId: this._id});
	}
});