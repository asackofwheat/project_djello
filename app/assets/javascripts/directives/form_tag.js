Djello.directive('formTag', [function(){

  return {
    restrict: 'E',
    templateUrl: '/templates/directives/form_tag.html',
    scope: {
      flip: '=',
      update: '&',
      attr: '@'
    },
    link: function(scope) {
      scope.resetForm = function() {
        scope.formData = {};
      }
    }
  }

}])