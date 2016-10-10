Djello.filter('userFilter', function() {

  return function(collection, activateUserFilter, users) {

    console.log(activateUserFilter)

    if (!activateUserFilter) {
      return collection;
    }

    var filteredCollection = []

    angular.forEach(collection, function(user) {
      if (users.indexOf(user) !== -1) {
        filteredCollection.push(user)
      }
    })
    return filteredCollection;
  };
});