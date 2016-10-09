Djello.factory('CardService', ['Restangular', '$rootScope', '_', function(Restangular, $rootScope, _){

  stub = {};

  stub.create = function(params) {
    return Restangular.all('cards').post({
      card: {
        title: params.title,
        description: params.description,
        list_id: params.list_id
      }
    });
  };

  stub.updateCard = function(params, card) {
    Restangular.restangularizeElement(null, card, 'cards');
    return card.patch(params).then(function(response) {
      return response
    })
  };

  stub.removeCard = function(card) {
    Restangular.restangularizeElement(null, card, 'cards');
    return card.remove().then(function(){
      $rootScope.$broadcast('card.remove');
    })
  };

  stub.findCard = function(id) {
    return Restangular.one('cards', id).get();
  }

  return stub;

}]);