import { combineReducers } from "redux";

import imageReducer from "./imageReducer";
import loadReducer from "./loadReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";

const mainReducer = combineReducers({
  images: imageReducer,
  isLoading: loadReducer,
  error: errorReducer,
  page: pageReducer,
});

export default mainReducer;
