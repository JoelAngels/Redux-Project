const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "Sign In":
      return !state; //true
    default:
      return false;
  }
};

export default loggedReducer;
