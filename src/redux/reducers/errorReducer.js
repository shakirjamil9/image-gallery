import { IMAGES } from "../constants/index";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES.LOAD_IMAGES_FAIL:
      return action.error;
    case IMAGES.LOAD_IMAGES:
    case IMAGES.LOAD_IMAGES_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
