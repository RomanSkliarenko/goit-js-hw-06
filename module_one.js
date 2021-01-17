import users from "./users.js";
// Получить массив имен всех пользователей (поле name).

const getUserNames = (users) => {
  let usersName = users.map(({ name }) => name);
  return usersName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
