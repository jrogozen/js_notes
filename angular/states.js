// States

$scope.isCreating = false;
$scope.isEditing = false;

function startCreating() {
  $scope.isCreating = true;
  $scope.isEditing = false;
}

function cancelCreating() {
  $scope.isCreating = false;
}

function startEditing() {
  $scope.isCreating = false;
  $scope.isEditing = true;
}

function cancelEditing() {
  $scope.isEditing = false;
}

function shouldShowCreating() {
  return $scope.currentCategory && !$scope.isEditing;
}

function shouldShowEditing() {
  return $scope.isEditing && !$scope.isCreating;
}

$scope.startCreating = startCreating;
$scope.cancelCreating = cancelCreating;
...

HTML

<button ng-click="startEditing();">Edit</button>

<!-- creating -->
<div ng-if="shouldShowCreating();">
  <button ng-click="startCreating();">

  </button>
  <div ng-if="isCreating">
    <button ng-click="cancelCreating();"></button>
  <div>
</div>

<!-- editing -->
<div ng-if="shouldShowEditing()">
  <button ng-click="cancelEditing();"></button>
</div>