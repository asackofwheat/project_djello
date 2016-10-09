Djello.factory('ListService', ['Restangular', '$rootScope', 'CardService', function(Restangular, $rootScope, CardService){

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
    // Restangular.restangularizeElement(null, list, 'lists');
    return list.patch(params).then(function(response) {
      return response
    })
  };

  stub.removeList = function(list) {
    // Restangular.restangularizeElement(null, list, 'lists');
    return list.remove().then(function(){
      $rootScope.$broadcast('list.remove');
    })
  };

  Restangular.extendModel('lists', function(model){
    model.createCard = function(params) {
      params.list_id = model.id;
      return CardService.create(params).then(function(response){
        model.cards.push(response);
        return response;
      });
    };
    return model;
  })

  return stub;

}]);