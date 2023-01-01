export const getDate = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en", { month: "short" });
  const year = dateObj.getFullYear();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();

  return `${year} ${month} ${day}, ${hour}:${minute}`;
};

export const getSliderDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("nl", { month: "long", day: "2-digit" });
  const year = dateObj.getFullYear();

  console.log("date slide", `${month} ${year}`);

  return `${month} ${year}`;
};
