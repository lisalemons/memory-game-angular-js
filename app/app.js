import './services/services.module.js';
import './modules/shared/shared.module.js';

import './modules/card/card.module.js';
import './modules/game/game.module.js';
import './modules/home/home.module.js';

// Declare app level module which depends on views, and core components
angular.module('memoryGame', [
  'ngRoute',
  'services',
  'shared',
  'card',
  'game',
  'home',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);