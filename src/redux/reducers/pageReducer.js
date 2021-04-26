import { IMAGES } from "../constants/index";

const pageReducer = (state = 0, action) => {
  switch (action.type) {
    case IMAGES.LOAD_IMAGES:
      return state + 1;
    default:
      return state;
  }
};

export default pageReducer