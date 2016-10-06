Djello.controller('BoardsShowCtrl', ['$scope', 'board', 'boardList', '$state', 'BoardService', function($scope, board, boardList, $state, BoardService){

  $scope.board = board;
  $scope.boards = boardList;
  $scope.editForm = false;

  $scope.$watch('selected', function(value) {
    if(value) {
      $state.go('boards.show', value);
    }
  });

  $scope.removeBoard = function() {
    BoardService.removeBoard($scope.board)
    $state.go('boards.index');
  };

  $scope.addBoard = function() {
    BoardService.addBoard({board: {title: 'untitled board'}}).then(function(response) {
      $state.go('boards.show', response);
    })
  };

  $scope.updateBoard = function() {
    BoardService.updateBoard($scope.formData, $scope.board).then(function(response){
      $scope.board = response;
      $scope.editForm = false;
      $scope.formData = {};
    })
  };

  $scope.addList = function() {
    $scope.board.createList({title: 'untitled', description: 'no description'})
  };

  $scope.$on('list.remove', function(){
    BoardService.getBoard($scope.board.id).then(function(response){
      $scope.board = response;
    })
  });

}]);