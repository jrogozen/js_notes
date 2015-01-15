// Ng-Model - Edit && Delete

HTML

<div ng-class="{'active':isSelectedBookmark(bookmark.id)}"></div>

ng-click="setEditedBookmark(bookmark);startEditing();"
ng-submit="updateBookmark(editedBookmark)"

JS

$scope.editedBookmark = null;

function setEditedBookmark(bookmark) {
  // create copy of bookmark to edit in the edit form
  $scope.editedBookmark = angular.copy(bookmark);
}

function updateBookmark(bookmark) {
  var index = _.findIndex($scope.bookmarks, function(b) {
    return b.id == bookmark.id
  });
  $scope.bookmarks[index] = bookmark;

  $scope.editBookmark = null;
  $scope.isEditing = false;
}

function isSelectedBookmark(bookmarkId) {
  return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmark.id;
}

$scope.setEditedBookmark = setEditedBookmark;
$scope.updateBookmark = updateBookmark;
$scope.isSelectedBookmark = isSelectedBookmark;

/* ------ */

HTML

ng-click="deleteBookmark(bookmark)"

JS

function deleteBookmark(bookmark) {
  _.remove($scope.bookmarks, function(b) {
    return b.id == bookmark.id;
  });
}

$scope.deleteBookmark = deleteBookmark;
