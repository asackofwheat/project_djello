Djello.factory('BoardService', ['Restangular', 'ListService', function(Restangular, ListService){

  var _boards = [];

  var stub = {}

  var populateBoards = function() {
    return Restangular.all('boards').getList().then(function(boards) {
      return angular.copy(boards, _boards);
    })
  };

  stub.getBoards = function() {
    if (_boards.length) {
      return _boards;
    } else {
      return populateBoards();
    }
  };

  stub.getBoard = function(id) {
    return Restangular.one('boards', id).get();
  };

  stub.removeBoard = function(board) {
    board.remove().then(function(){
      angular.copy(populateBoards(), _boards);
    })
  };

  stub.addBoard = function(params) {
    return Restangular.all('boards').post(params).then(function(response){
      angular.copy(populateBoards(), _boards);
      return response
    })
  };

  stub.updateBoard = function(params, board) {
    return board.patch(params).then(function(response) {
      // angular.copy(populateBoards(), _boards);
      return response
    })
  };

  Restangular.extendModel('boards', function(model){
    model.createList = function(params) {
      params.board_id = model.id;
      return ListService.create(params).then(function(response){
        model.lists.push(response);
        return response;
      });
    };
    return model;
  })

  return stub;

}]);