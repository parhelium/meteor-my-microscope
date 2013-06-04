
if(Meteor.isServer) {

	Nodetime.profile({
		accountKey: '4bc2ffc8f87132fba673ddecf040aa0ca5945c87',
		appName: 'mymicro',
		debug: true,
		mongodbMetrics: true,
	});

	Nodetime.metric('demo', 'init', 1, 'time', 'sum');

}





