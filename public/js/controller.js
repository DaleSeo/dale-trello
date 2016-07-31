var ctrl = angular.module('TrelloCtrl', ['TrelloSvc']);

ctrl.controller('MainCtrl', function (AngelloModel, AngelloHelper) {
  var main = this;

  main.stories = AngelloModel.getStories();

  /* select */
  main.statuses = AngelloModel.getStatuses();
  main.types = AngelloModel.getTypes();
  main.statusesIndex = AngelloHelper.buildIndex(main.statuses, 'name');
  main.typesIndex = AngelloHelper.buildIndex(main.types, 'name');

  main.setCurrentStory = function (story) {
    main.currentStory = story;
    main.currentStatus = main.statusesIndex[story.status];
    main.currentType = main.typesIndex[story.type];
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

  main.setCurrentStatus = function (status) {
    if (typeof main.currentStory !== 'undefined') {
      main.currentStory.status = status.name;
    }
  };

  main.setCurrentType = function (type) {
    if (typeof main.currentStory !== 'undefined') {
      main.currentStory.type = type.name;
    }
  };

});