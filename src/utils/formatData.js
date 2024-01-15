const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const getDateObj = (date, time) => {
  if (date && time) {
    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");
    return new Date(year, month - 1, day, hour, minute);
  }
};

export const formatDate = (dateObj) => {
  let dueObj = {};

  if (dateObj === "undefined" || dateObj === "") {
    dueObj.date = "Not selected"
  }

  const todaysDate = new Date();
  const dateDifference = (dateObj - todaysDate) / (1000 * 60 * 60 * 24);
  const simpleTodaysDate = todaysDate.toLocaleDateString();
  const simpleDateObj = dateObj.toLocaleDateString();

  

  let dueTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  
  if (simpleDateObj === simpleTodaysDate) {
    dueObj.date = `Today at ${dueTime}`;
    dueObj.color = "red";
  } else if (dateDifference >= 1 && dateDifference < 4) {
    dueObj.date = `${daysOfWeek[dateObj.getDay()]} at ${dueTime}`;
    dueObj.color = "orange";
  } else {
    dueObj.date = `${months[dateObj.getMonth()]} ${dateObj.getDate()} at ${dueTime}`;
    dueObj.color = "black";
  }

  return dueObj;
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
