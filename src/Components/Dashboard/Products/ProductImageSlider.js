import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../Products/ImageSlider.css";

const ProductImageSlider = ({ images }) => {
  const images2 = images.map((image, ind) => {
    return {
      original: image,
      thumbnail: image,
      originalClass: "flex w-full h-full object-contain",
    };
  });

  return (
    <div className="w-full flex h-full rounded-lg ">
      <ImageGallery
        items={images2}
        showPlayButton={false}
        showThumbnails={true}
        additionalClass="flex w-full h-full items-center justify-center"
      />
    </div>
  );
};

export default ProductImageSlider;
