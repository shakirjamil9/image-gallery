import { IMAGES } from "../constants/index";

const loadImages = () => ({
  type: IMAGES.LOAD_IMAGES,
});

const setImages = (images) => ({
  type: IMAGES.LOAD_IMAGES_SUCCESS,
  images,
});

const setError = (error) => ({
  type: IMAGES.LOAD_IMAGES_FAIL,
  error,
});

export { setImages, setError, loadImages };
