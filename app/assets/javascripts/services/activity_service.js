Djello.factory('ActivityService', ['Restangular', function(Restangular){

  stub = {};

  stub.create = function(params) {
    return Restangular.all('activities').post({
      activity: {
        activity: params.activity,
        object: params.object,
        description: params.description,
        card_id: params.card_id
      }
    });
  };

  return stub;

}])