import users from "./users.js";

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  const usersWithGender = users.filter((user) =>
    user.gender === gender ? user : ""
  );
  return usersWithGender;
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
