Lessons = new Meteor.Collection("lessons");

validateLesson = function (lesson) {
  var errors = {};
  if (!lesson.title)
    errors.title = "Please fill in a headline";

  if (!lesson.date)
    errors.date= "Please fill in a date ";

  if (!lesson.location)
    errors.location= "Please fill in a location";

  if (!lesson.time)
    errors.time= "Please fill in a time";

  if (!lesson.description)
    errors.description= "Please fill in a description";

  if (!lesson.presentationUrl)
    errors.presentationUrl= "Please fill in presentation's URL";
  return errors;
}

Lessons.allow({
   update: function(userId, lesson) { return ownsDocument(userId, lesson);  },
  remove: function(userId, lesson) { return ownsDocument(userId, lesson);  },

});


//Lessons.deny({
//  update: function(userId, lesson, fieldNames) {
//    // may only edit the following two fields:
//    return (_.without(fieldNames, 'title').length > 0);
//  }
//});

Lessons.deny({
  update: function(userId, lesson, fieldNames, modifier) {
    // may only edit the following two fields:
   var errors = validateLesson(modifier.$set);
   console.log(errors);
   return errors.title || errors.time || errors.date || errors.description || errors.presentationUrl || errors.location;
    
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
      presentationUrl: String,
      description: String
    });

    var errors = validateLesson(lessonAttributes);
    if (errors.title || errors.time || errors.date || errors.description || errors.presentationUrl || errors.location)
      throw new Meteor.Error('invalid-lesson', "You must set all lesson's attributesn");

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
      commentCount: 0,
      submitted: new Date()
    });

    var lessonId = Lessons.insert(lesson);
    return {
      _id: lessonId
    };
  }
});
