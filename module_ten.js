import users from "./users.js";

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  // let uniqueSkills = [];
  // users.forEach((user) => {
  //   user.skills.forEach((skill) => {
  //     uniqueSkills.push(skill);
  //   });
  // });
  // uniqueSkills.sort();
  // let unique = new Set(uniqueSkills);
  // uniqueSkills = [...unique];
  // return uniqueSkills;
  const allSkills = users.reduce((acc, { skills }) => acc.concat(skills), []);
  return allSkills
    .filter((skill, index) => allSkills.indexOf(skill) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Task 10.
// Тут задача решается без Set
// Как вариант можно
// [].reduce().filter().sort()
