Djello.factory('CardService', ['Restangular', '$rootScope', '_', 'UserService', 'ActivityService', function(Restangular, $rootScope, _, UserService, ActivityService){

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
    return card.createAct({activity: "updated", object: Object.keys(params)[0], description: params[Object.keys(params)[0]]}).then(function(){
      return card.patch(params).then(function(response) {
        return response
      })
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

  Restangular.extendModel('cards', function(model){
    model.addMember = function(user) {
      return model.createAct({activity: "added", object: user.email}).then(function(){
        return Restangular.all('card_users').post({user_id: user.id, card_id: model.id}).then(function(){
          model.users.push(user);
        });
      });
    };

    model.removeMember = function(user) {
      return model.createAct({activity: "removed", object: user.email}).then(function(){
        Restangular.all('card_users').customGET("remove", {user_id: user.id, card_id: model.id}).then(function(){
          var newData = _.filter(model.users, function(u){
          return u.id !== user.id
          })
          angular.copy(newData, model.users)
        })
      })
    };

    model.createAct = function(params) {
      params.card_id = model.id;
      return ActivityService.create(params).then(function(response){
        model.activities.push(response);
        return response;
      });
    };
    return model;
  })

  return stub;

}]);