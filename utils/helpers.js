module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth()}/${new Date(date).getDate()}/${
        new Date(date).getFullYear()
      }` + " at " + date.toLocaleTimeString();
    },
    reverse: (arr) => {
      return arr.reverse();
    }
  };