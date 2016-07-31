var ctrl = angular.module('TrelloCtrl', ['TrelloSvc']);

ctrl.controller('MainCtrl', function (AngelloModel) {
  var main = this;

  main.stories = AngelloModel.getStories();

  /* select */
  main.statuses = AngelloModel.getStatuses();
  main.types = AngelloModel.getTypes();

  main.setCurrentStory = function (story) {
    main.currentStory = story;
  };

  main.createStory = function() {
    main.stories.push({
      title: 'New Story',
      description: 'Description pending.',
      criteria: 'Criteria pending.',
      status: 'Back Log',
      type: 'Feature',
      reporter: 'Pending',
      assignee: 'Pending'
    });
  };

});