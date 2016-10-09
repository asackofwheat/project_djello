Djello.controller('BoardsIndexCtrl', ['$scope', 'boardList', '$state', 'BoardService', 'ModalService', function($scope, boardList, $state, BoardService, ModalService){

  $scope.boards = boardList

  $scope.addBoard = function() {
    BoardService.addBoard({board: {title: 'untitled board'}}).then(function(response) {
      $state.go('boards.show', response);
    })
  }

}]);