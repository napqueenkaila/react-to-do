const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentDate = new Date();

const formatDateTime = (dateObj) => {
  let dueObj = {};
  const dateDifference = (dateObj - currentDate) / (1000 * 60 * 60 * 24);
  let dueTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  //string
  if (currentDate.toDateString() === dateObj.toDateString()) {
    dueObj.date = `Today at ${dueTime}`;
  } else if (dateDifference < 1) {
    dueObj.date = `Tomorrow at ${dueTime}`;
  } else if (dateDifference >= 1 && dateDifference < 4) {
    dueObj.date = `${daysOfWeek[dateObj.getDay()]} at ${dueTime}`;
  } else {
    dueObj.date = `${
      months[dateObj.getMonth()]
    } ${dateObj.getDate()} at ${dueTime}`;
  }
  //colors
  if (dateDifference < 1) {
    dueObj.color = "red";
  } else if (dateDifference >= 1 && dateDifference < 4) {
    dueObj.color = "orange";
  } else {
    dueObj.color = "black";
  }
  return dueObj;
};

const formatDateOnly = (dateObj) => {
  let dueObj = {};
  const dateDifference = (dateObj - currentDate) / (1000 * 60 * 60 * 24);

  //string
  if (dateObj.toDateString() === currentDate.toDateString()) {
    dueObj.date = `Today`;
  } else if (dateDifference < 1) {
    dueObj.date = `Tomorrow`;
  } else if (dateDifference >= 1 && dateDifference < 4) {
    dueObj.date = `${daysOfWeek[dateObj.getDay()]}`;
  } else {
    dueObj.date = `${months[dateObj.getMonth()]} ${dateObj.getDate()}`;
  }
  //colors
  if (dateDifference < 1) {
    dueObj.color = "red";
  } else if (dateDifference >= 1 && dateDifference < 4) {
    dueObj.color = "orange";
  } else {
    dueObj.color = "black";
  }
  return dueObj;
};

export const getDateObj = (date, time) => {
  if (date && time) {
    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");
    const dateObj = new Date(year, month - 1, day, hour, minute);
    return formatDateTime(dateObj);
  } else if (date) {
    const [year, month, day] = date.split("-");
    const dateObj = new Date(year, month - 1, day);
    return formatDateOnly(dateObj);
  } else {
    const dateObj = { date: "NA", color: "black" };
    return dateObj;
  }
};

export const formatPriority = (priority) => {
  if (priority >= 1 && priority <= 3) {
    return `Low (${priority}/10)`;
  } else if (priority >= 4 && priority <= 7) {
    return `Medium (${priority}/10)`;
  } else if (priority >= 8 && priority <= 10) {
    return `High (${priority}/10)`;
  }
};

export const formatComplexity = (complexity) => {
  if (complexity >= 1 && complexity <= 3) {
    return `Low (${complexity}/10)`;
  } else if (complexity >= 4 && complexity <= 7) {
    return `Moderate (${complexity}/10)`;
  } else if (complexity >= 8 && complexity <= 10) {
    return `High (${complexity}/10)`;
  }
};
