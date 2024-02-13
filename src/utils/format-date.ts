export const formatDate = (inputDate: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [datePart] = inputDate.split(" ");
  const [year, month, day] = datePart.split("-");

  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
};
