var app = angular.module('siteApp', ['pascalprecht.translate']);

var ingles = {
  PAGE_TITLE : 'Twitter Potentials - vTiger 6 Module',

  MENU_FEATURES : 'Features',
  MENU_FAQ      : 'FAQ',

  LBL_TO_ACCOUNT : 'Turn Twitter Users into Accounts',
  LBL_TO_ACCOUNT_DESCRIPTION : 'With this m'
};

var portugues = {
  PAGE_TITLE : 'Twitter Potentials - Módulo para o vTiger 6',

  // Menu
  MENU_FEATURES : 'Funcionalidades',
  MENU_FAQ      : 'Perguntas Frequentes',

  LBL_TWEET_MANAGEMENT : 'Gerenciamento de Tweets',
  LBL_TWEET_MANAGEMENT_DESCRIPTION : 'Você pode tweetar, retweetar e curtir tweets como faria no twitter.com. É fácil gerenciar suas mensagens com o Twitter Potentials.',

  LBL_TO_ACCOUNTS : 'Twitters em Organizações',
  LBL_TO_ACCOUNTS_DESCRIPTION : 'Seus seguidores ou amigos podem ser transformados em Organizações, Leads ou Contatos.',

  LBL_GENERATE_POTENTIALS : 'Gere Oportunidades',
  LBL_GENERATE_POTENTIALS_DESCRIPTION : 'As oportunidades de negócio estão no próprio Twitter. Use-as a partir do módulo do Twitter para o vTiger',

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
