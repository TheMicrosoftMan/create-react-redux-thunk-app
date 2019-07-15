import { sayConstants } from "../_constants";

const initialState = {
  sayWord: ""
};

export const say = (state = initialState, action) => {
  switch (action.type) {
    case sayConstants.SAY_WORD:
      return {
        ...state,
        sayWord: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
