var app = angular.module('Trello', []);

app.controller('MainCtrl', function (AngelloModel) {
    var main = this;
    main.stories = AngelloModel.getStories();
});

app.service('AngelloModel', function() {
    var service = this;
    var statuses = [
        {name: 'Back Log'},
        {name: 'To Do'},
        {name: 'In Progress'},
        {name: 'Code Review'},
        {name: 'QA Review'},
        {name: 'Verified'},
        {name: 'Done'}
    ];
    var types = [
        {name: 'Feature'},
        {name: 'Enhancement'},
        {name: 'Bug'},
        {name: 'Spike'}
    ];
    var stories = [
        {
            title: 'First story',
            description: 'Our first story.',
            criteria: 'Criteria pending.',
            status: 'To Do',
            type: 'Feature',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        },
        {
            title: 'Second story',
            description: 'Do something.',
            criteria: 'Criteria pending.',
            status: 'Back Log',
            type: 'Feature',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        },
        {
            title: 'Another story',
            description: 'Just one more.',
            criteria: 'Criteria pending.',
            status: 'Code Review',
            type: 'Enhancement',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        }
    ];

    service.getStatuses = function () {
        return statuses;
    };

    service.getTypes = function () {
        return types;
    };

    service.getStories = function () {
        return stories;
    };
});

app.directive('story', function () {
    return {
        scope: true,
        replace: true,
        template: '<div><h4>{{story.title}}</h4><p>{{story.description}}</p></div>'
    }
});