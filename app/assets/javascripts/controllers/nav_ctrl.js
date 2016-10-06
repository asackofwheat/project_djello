Djello.controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth){

  Auth.currentUser().then(function(user){
    $scope.currentuser = user;
  });

}]);