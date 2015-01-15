// Filters

<li ng-repeat="category in categories" ng-class="{'active':isCurrentCategory(category)}">

controller

function isCurrentCategory(category) {
  $scope.currentCategory !== null && $scope.currentCategory.name === category.name
};

/* adds active class when expression evaluates to true */