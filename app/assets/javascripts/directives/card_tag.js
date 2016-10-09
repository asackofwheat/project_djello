Djello.directive('cardTag', ['CardService', 'ModalService', function(CardService, ModalService){

  return {
    restrict: 'E',
    templateUrl: '/templates/directives/card_tag.html',
    scope: {
      card: '=',
      list: '=',
      board: '='
    },
    link: function(scope) {
      scope.show = function() {
        ModalService.showModal({
          templateUrl: '/templates/modal.html',
          controller: "ModalController",
          inputs: {card: scope.card, list: scope.list, board: scope.board}
        }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            scope.message = "You said " + result;
          });
        });
      };
    }
  }

}])