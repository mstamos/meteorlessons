var lessonsData= [
  {
    title: 'What is Meteor and how does it do it\'s magic?',
    date: '21/4/2015',
    time: '19:30',
    location: 'SciFy'
  }, 
  {
    title: 'Installation and basic concepts. ',
    date: '5/5/2015',
    time: '19:30',
    location: 'SciFy'
  }, 
  {
    title: 'Installation and basic concepts.',
    date: '19/5/2015',
    time: '19:30',
    location: 'SciFy'
  }
];
Template.lessonsList.helpers({
  lessons: lessonsData
});
