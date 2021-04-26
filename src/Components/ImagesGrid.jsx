import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImages } from "../redux/actions/index";
import ClipLoader from "react-spinners/ClipLoader";

const ImagesGrid = () => {
  const images = useSelector((state) => state.images);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <>
      <div className="image-container">
        {images.map((image) => {
          return (
            <div>
              <img src={image.urls.small} />
            </div>
          );
        })}
      </div>
      
      <button
        className="glow-on-hover" type="button"
        disabled={isLoading}
        onClick={() => dispatch(loadImages())}
      >
        {isLoading ? <ClipLoader size={20} color="white"/> : "Load Images"}
      </button>
    </>
  );
};

export default ImagesGrid;
