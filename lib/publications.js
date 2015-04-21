Meteor.publish("lessons", function () {
  return Lessons.find();
})
