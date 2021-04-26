import { call, put, takeEvery, select } from "redux-saga/effects";
import { IMAGES } from "../constants/index";

import { fetchImages } from "../api/index";
import { setImages, setError } from "../actions/index";

const getPage = (state) => state.page;

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* rootSaga() {
  yield takeEvery(IMAGES.LOAD_IMAGES, handleImagesLoad);
}
export default rootSaga;
