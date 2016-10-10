Djello.controller('ModalController', ['$scope', 'card', 'list', 'board', 'CardService', 'UserService', 'Restangular', '_', 'close', function($scope, card, list, board, CardService, UserService, Restangular, _, close) {
  
 $scope.close = function(result) {
  close(result, 500); 
 };

 $scope.card = card;
 $scope.list = list;
 $scope.board = board;
 $scope.users = UserService.allUsers();
 $scope.desc = false;
 $scope.title = false;
 $scope.activateUserFilter = true;

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

  $scope.addUser = function() {
    Restangular.restangularizeElement(null, $scope.card, 'cards');
    $scope.card.addMember($scope.selected).then(function(){
      if (!_.where($scope.selected.boards, {id:$scope.board.id}).length) {
        Restangular.all('user_boards').post({user_id: $scope.selected.id, board_id: $scope.board.id})
      }
      $scope.selected = "";
    })
  }

  $scope.removeUser = function(id) {
    var person = _.find($scope.users, function(u) {
      return u.id === id
    });
    Restangular.restangularizeElement(null, $scope.card, 'cards');
    $scope.card.removeMember(person);
  }

}]);