Djello.controller('BoardsIndexCtrl', ['$scope', 'boardList', '$state', 'BoardService', function($scope, boardList, $state, BoardService){

  $scope.boards = boardList

  $scope.addBoard = function() {
    BoardService.addBoard({board: {title: 'untitled board'}}).then(function(response) {
      $state.go('boards.show', response);
    })
  }

}]);