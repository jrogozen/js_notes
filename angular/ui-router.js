//UI Router

~ JS

angular.module('Eggly', [
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('eggly', {
        url: '',
        abstract: true
      })
    ;

    $urlRouteProvider.otherwise('/');
  })

~ categories.js

.config(function($stateProvider) {
  $stateProvider
    .state('eggly.categories', {
      url: '/',
      views: {
        'categories@': {
          controller: 'CategoriesCtrl',
          templateUrl: 'app/categories/categories.tmpl.html'
        },
        'bookmarks@': {
          controller: 'BookmarksCtrl',
          templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
        }
      }
    })
})
.controller('CategoriesCntrl', function CategoriesCtrl($scope) {

})

~ bookmarks.js 

.config(function($stateProvider) {
  $stateProvider
    .state('eggly.categories.bookmarks', {
      url: 'categories/:category',
      views: {
        'bookmarks@': {
          templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
          controller: 'BookmarksCtrl'
        }
      }
    })
})
.controller('BookmarksCtrl', function($scope, $stateParams) {
  $scope.currentCategoryName = $stateParams.category;
})

~ HTML

<div ui-view="categories"></div>

<div ui-view="bookmarks"></div>

~ TEMPLATE

..

// Navigating States

~ main controller

// Using $state.go
function setCurrentCategory(category) {
  $scope.currentCategory = category;

  $state.go('eggly.categories.bookmarks', {category: category.name});
}

~ HTML

// Using ui-sref directive
<a ui-sref="eggly.categories.bookmarks({category:category.name})">Go to category</a>

