const formatTime = (value) => {
  return value < 10 ? `0${value}` : value.toString();
};

export const displayTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${formatTime(minutes)}:${formatTime(seconds)}`;
};
