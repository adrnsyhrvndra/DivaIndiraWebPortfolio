import React from "react";

const LazyImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default LazyImage;