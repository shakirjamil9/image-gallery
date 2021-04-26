import { IMAGES } from "../constants/index";

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_IMAGES_SUCCESS:
      return [...state, ...action.images];
    default:
      return state;
  }
};

export default imageReducer;
