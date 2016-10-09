Djello.controller('ModalController', ['$scope', 'card', 'list', 'board', 'CardService', 'close', function($scope, card, list, board, CardService, close) {
  
 $scope.close = function(result) {
  close(result, 500); // close, but give 500ms for bootstrap to animate
 };

 $scope.card = card;
 $scope.list = list;
 $scope.board = board;
 $scope.desc = false;
 $scope.title = false;

  $scope.updateCard = function(formData) {
    CardService.updateCard(formData, $scope.card)
      .then(function(response){
        angular.copy(response, $scope.card);
        $scope.desc = false;
        $scope.title = false;
    })
  };

  $scope.removeCard = function() {
    CardService.removeCard($scope.card);
  };

}]);