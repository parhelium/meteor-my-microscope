// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var meId = Meteor.users.insert({
    profile:{name:'Kuba Wyrobek'}
  });

  var me = Meteor.users.findOne(meId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    commentsCount:2,
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: now - 7 * 3600 * 1000
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    commentsCount:0,
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000
  });

  Posts.insert({
    title: 'The Meteor Book',
    commentsCount:0,
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: now - 12 * 3600 * 1000
  });
}