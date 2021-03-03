export const increment = (num) => {
  return {
    type: "INCREMENT",
    payLoad: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
