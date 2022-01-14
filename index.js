var addDays = require("date-fns/addDays");

module.exports = function (days) {
  let newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
