export default (
    state = [],
    action
  ) => {
    switch (action.type) {
      case "Set_Product":
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };