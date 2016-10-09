Djello.directive('listTag', ['ListService', 'Restangular', function(ListService, Restangular){

  return {
    restrict: 'E',
    templateUrl: '/templates/directives/list_tag.html',
    scope: {
      list: '=',
      board: '='
    },
    link: function(scope){
      Restangular.restangularizeElement(null, scope.list, 'lists');
      scope.editTitle = false;
      scope.editDesc = false;
      scope.cardAdd = false;
      scope.updateList = function(formData) {
        ListService.updateList(formData, scope.list)
          .then(function(response){
            angular.copy(response, scope.list);
            Restangular.restangularizeElement(null, scope.list, 'lists');
            scope.editDesc = false;
            scope.editTitle = false;
        })
      };
      scope.removeList = function() {
        ListService.removeList(scope.list);
      };
      scope.addCard = function(formData) {
        scope.list.createCard({title: formData.title, description: 'no description'})
        scope.cardAdd = false;
      }
    }
  }

}])