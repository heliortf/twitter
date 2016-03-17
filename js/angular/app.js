var app = angular.module('siteApp', ['pascalprecht.translate']);

var ingles = {
  PAGE_TITLE : 'Twitter Potentials - vTiger 6 Module'
};

var portugues = {
  PAGE_TITLE : 'Twitter Potentials - Módulo para o vTiger 6'
};

app.config(['$translateProvider', function ($translateProvider) {
  // add translation table
  $translateProvider
    .translations('en_US', ingles)
    .translations('pt_BR', portugues)
    .preferredLanguage('pt_BR');
}]);

app.controller('SiteController', ['$scope', '$translate', '$rootScope', function($scope, $translate, $rootScope){
    $scope.linguagem = "pt_BR";

    $scope.mudarLinguagem = function(linguagem){
      $translate.use(linguagem);
    };
}]);
