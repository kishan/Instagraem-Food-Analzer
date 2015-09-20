// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/2', {
  name: 'test_template',
  action: function () {
    this.render('test_template');
  }
});

Router.route('/enter', {
  name: 'enter',
  action: function () {
    this.render('enter');
  }
});


Router.route('/analysis', {
  name: 'analysis',
  action: function () {
    this.render('analysis');
  }
});