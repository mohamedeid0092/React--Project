export default (state = {
    Counter:0
}, action) => {
    switch (action.type) {
    case "SET_COUNTING":
    return {
    ...state,
    Counter:action.payload,
    };
    default:
    return state;
    }
    };