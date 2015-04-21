Lessons = new Meteor.Collection("lessons");

Lessons.allow({
  update: function(userId, lesson) { return ownsDocument(userId, lesson);  },
  remove: function(userId, lesson) { return ownsDocument(userId, lesson);  },

});

Lessons.deny({
  update: function(userId, lesson, fieldNames) {
    // may only edit the following two fields:
     return (_.without(fieldNames, 'title', 'date', 'time', 'location', 'description').length > 0);
    
  }

});

Meteor.methods({
  lessonInsert: function(lessonAttributes) {
    check(Meteor.userId(), String);
    check(lessonAttributes, {
      title: String,
      time: String,
      date: String,
      location: String,
      description: String
    });
    var lessonWithSameTitle = Lessons.findOne({title: lessonAttributes.title});
    if (lessonWithSameTitle) {
      return {
        lessonExists: true,
        _id: lessonWithSameTitle._id
      }
    }
    var user = Meteor.user();
    var lesson = _.extend(lessonAttributes, {
      userId: user._id,
      submitted: new Date()
    });

    var lessonId = Lessons.insert(lesson);
    return {
      _id: lessonId
    };
  }
});
