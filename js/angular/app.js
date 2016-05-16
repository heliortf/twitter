var app = angular.module('siteApp', ['pascalprecht.translate']);

var ingles = {
  PAGE_TITLE : 'Twitter Potentials - vTiger 6 Module',

  MENU_FEATURES : 'Features',
  MENU_FAQ      : 'FAQ'
};

var portugues = {
  PAGE_TITLE : 'Twitter Potentials - Módulo para o vTiger 6',

  // Menu
  MENU_FEATURES : 'Funcionalidades',
  MENU_FAQ      : 'Perguntas Frequentes',

  LBL_TWEET_MANAGEMENT : 'Gerenciamento de Tweets',
  LBL_TWEET_MANAGEMENT_DESCRIPTION : 'Você pode tweetar, retweetar e curtir tweets como faria no twitter.com. É fácil gerenciar suas mensagens com o Twitter Potentials.',



  FAQ_PRECISA_CONTA_TWITTER : 'Preciso ter uma conta no Twitter para usar o Twitter Potentials no vTiger 6?'
};

var espanhol = {
  PAGE_TITLE : 'Twitter Potentials - Modulo para el vTiger 6',

  // Menu
  MENU_FEATURES : 'Funcionalidades',
  MENU_FAQ      : 'Preguntas frecuentes'
}

app.config(['$translateProvider', function ($translateProvider) {
  // add translation table
  $translateProvider
    .translations('en_US', ingles)
    .translations('pt_BR', portugues)
    .translations('es', espanhol)
    .preferredLanguage('pt_BR');
}]);

app.controller('SiteController', ['$scope', '$translate', '$rootScope', function($scope, $translate, $rootScope){

    $scope.mudarLinguagem = function(linguagem){
      $translate.use(linguagem);
    };
}]);
