var Djello = angular.module('Djello', ['ui.router', 'restangular', 'Devise']);

Djello.factory('_', ['$window', function($window){
  return $window._;
}]);

Djello.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, RestangularProvider){

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

  $urlRouterProvider.otherwise('/boards');

  $stateProvider.state('boards', {
    abstract: true,
    url: '/boards',
    resolve: {
      'boardList': ['BoardService', function(BoardService) {
        return BoardService.getBoards();
      }]
    },
    views: {
      '': {
        template: '<ui-view></ui-view>'
      },
      'nav': {
        templateUrl: '/templates/boards/nav.html',
        controller: 'NavCtrl'
      }
    }
  })
  .state('boards.index', {
    url: '',
    templateUrl: '/templates/boards/index.html',
    controller: 'BoardsIndexCtrl'
  })
  .state('boards.show', {
    url: '/:id',
    templateUrl: '/templates/boards/show.html',
    controller: 'BoardsShowCtrl',
    resolve: {
      'board': ['BoardService', '$stateParams', function(BoardService, $stateParams) {
        return BoardService.getBoard($stateParams.id)
      }]
    }
  })

}]);