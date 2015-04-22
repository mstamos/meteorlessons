Template.lessonListItem.helpers({
	ownLesson: function () {
		return this.userId === Meteor.userId();
	}
});
