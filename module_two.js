import users from "./users.js";
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const usersWithEyeColor = users.filter(({ eyeColor }) =>
    eyeColor === color ? true : ""
  );
  return usersWithEyeColor;
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
