const createUser = function (name, age) {
  return {
    name,
    age,
    toString: function () {
      return `${this.name} is ${this.age}y.o.`;
    },
  };
};
const users = [
  createUser("John", 21),
  createUser("Tory", 18),
  createUser("Kate", 23),
  createUser("Pete", 22),
];
users.sort(sortUsers);
console.log(users);
function sortUsers(userf, users) {
  if (userf.age === users.age) {
    return 0;
  } else if (userf.age > users.age) {
    return 1;
  } else {
    return -1;
  }
}