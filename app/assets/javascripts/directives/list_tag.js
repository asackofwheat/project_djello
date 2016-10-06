Djello.directive('listTag', ['ListService', function(ListService){

  return {
    restrict: 'E',
    templateUrl: '/templates/directives/list_tag.html',
    scope: {
      list: '=',
      board: '='
    },
    link: function(scope){
      scope.editTitle = false;
      scope.updateList = function() {
        ListService.updateList(scope.formData, scope.list)
          .then(function(response){
            scope.list = response;
            scope.editTitle = false;
            scope.formData = {};
        })
      }
      scope.removeList = function() {
        ListService.removeList(scope.list);
      }
    }
  }

}])