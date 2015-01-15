// Meta Programming

Object.prototype.defineMethod = function(methodName, methodBody) {
  Object.defineProperty(this, methodName, {
    enumerable: true,
    configurable: true,
    value: methodBoy
  });
};

var dog = {breed: "Shelty"}

dog.defineMethod("bark", function() {
  return "woof!";
})

dog.bark();

function User() {
  User.statuses = ["inactive", "active"];
  _lo.each(User.statuses, function(status) {
    this.defineMethod("is" + status.capitalize(), function() {
      return this.status == status;
    })
  }, this);
}

var user = new User();

user.status = "active";

user.isActive() #=> true

user.isInactive() #=> false