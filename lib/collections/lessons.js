Lessons = new Meteor.Collection("lessons");

Lessons.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
})
