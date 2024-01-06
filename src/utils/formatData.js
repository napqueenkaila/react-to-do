import formatRelative from "date-fns/formatRelative";

export const formatDate = (date, time) => {
  if (date && time) {
    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");
    const dateObj = new Date(year, month - 1, day, hour, minute);
    const todaysDate = new Date();
    const relativeDate = formatRelative(dateObj, todaysDate);
    const dueDateString =
      relativeDate.charAt(0).toUpperCase() + relativeDate.slice(1);
    return dueDateString;
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
