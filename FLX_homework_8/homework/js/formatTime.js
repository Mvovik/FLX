function formatTime(num) {
  let days = Math.floor(num / 1440);
  let hours = Math.floor(num / 60);
  let minutes = num;

  if (minutes > 59) {
    minutes = num % 60;
  }
  if (hours > 23) {
    hours = 0;
  }

  return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)";
}

formatTime(120);
formatTime(59);
formatTime(3601);