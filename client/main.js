Meteor.startup(function(){
	mixpanel.init("0b55aaf64a2429f114796641e113d0a2");
	mixpanel.track("Application Startup",{});
	
	Deps.autorun(function(){
		var user = Meteor.user();	
		if(user && !Meteor.loggingIn()){
			mixpanel.identify(user._id);
			mixpanel.people.set({
				"$email":user.emails[0].address,
				'$created': new Date()
			});
		}
	})
	
})

newPostsHandle = Meteor.subscribeWithPagination('newPosts', 10);
bestPostsHandle = Meteor.subscribeWithPagination('bestPosts', 10);

Deps.autorun(function() {
  Meteor.subscribe('singlePost', Session.get('currentPostId'));
  Meteor.subscribe('comments', Session.get('currentPostId'));
});

Meteor.subscribe('notifications');