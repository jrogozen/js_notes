//Ng-Submit && Ng-Model

HTML

ng-submit="createBookmark(newBookmark)"

ng-model="newBookmark.url"

JS

function startCreating() {
  isCreating: true;
  isEditing: false;

  resetCreateForm();
}

function resetCreateForm() {
  $scope.newBookmark = {
    title: '',
    url: '',
    category: $scope.currentCategory
  };
}

function createBookmark(bookmark) {
  bookmark.id = $scope.bookmarks.length;
  $scope.bookmarks.push(bookmark);

  resetCreateForm();
}

$scope.createBookmark = createBookmark;
