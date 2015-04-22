Meteor.startup(function () {
  if(Meteor.users.find().count() < 1) {
    var user = {
      name: 'mstamos',
      email: 'admin@home.com',
      roles: ['admin']
    };
    var userId = Accounts.createUser({
      email: user.email,
      password: '123',
      username: user.name,
      profile:{
        name: user.name
      }
    });
    Meteor.users.update({_id:userId}, {$set:{'emails.0.verified':true}});
    Roles.addUsersToRoles(userId, user.roles);
  }
});
