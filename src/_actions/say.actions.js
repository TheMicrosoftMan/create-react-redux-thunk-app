import { sayConstants } from "../_constants";

export const say = word => {
  return {
    type: sayConstants.SAY_WORD,
    payload: word
  };
};
