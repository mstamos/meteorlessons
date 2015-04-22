Template.lessonItem.helpers({
	ownLesson: function () {
		return this.userId === Meteor.userId();
	}
});
