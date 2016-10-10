Djello.factory('UserService', ['Restangular', function(Restangular){

  stub = {};

  stub.findUser = function(id) {
    return Restangular.one('users', id).get();
  };

  stub.allUsers = function() {
    return Restangular.all('users').getList().$object;
  };

  return stub;

}])