Template.enter.created = function () {
  Session.set('isActive', false);
  Session.set('showLogin', false);
};

Template['enter'].helpers({
});

Template['enter'].events({
  'click #toAnalysisPage' : function () {
    Router.go('/analysis');
  },
});



