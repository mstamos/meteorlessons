if (Lessons.find().count() === 0) {
  Lessons.insert({
    title: 'What is Meteor and how does it do it\'s magic?',
    date: '21/4/2015',
    time: '19:30',
    location: 'SciFy'
  });
  
  Lessons.insert({
    title: 'Installation and basic concepts. ',
    date: '5/5/2015',
    time: '19:30',
    location: 'SciFy'
  });
  
  Lessons.insert({
    title: 'Learning Meteor by create an example application.',
    date: '19/5/2015',
    time: '19:30',
    location: 'SciFy'
  });
}
