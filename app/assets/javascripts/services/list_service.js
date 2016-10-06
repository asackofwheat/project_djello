Djello.factory('ListService', ['Restangular', '$rootScope', function(Restangular, $rootScope){

  stub = {};

  stub.create = function(params) {
    return Restangular.all('lists').post({
      list: {
        title: params.title,
        description: params.description,
        board_id: params.board_id
      }
    });
  };

  stub.updateList = function(params, list) {
    Restangular.restangularizeElement(null, list, 'lists');
    return list.patch(params).then(function(response) {
      return response
    })
  };

  stub.removeList = function(list) {
    Restangular.restangularizeElement(null, list, 'lists');
    return list.remove().then(function(){
      $rootScope.$broadcast('list.remove');
    })
  };

  return stub;

}]);