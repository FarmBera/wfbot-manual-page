import React from "react";

/**
 * Image components for manual
 * @param {string} src - img path (URL or imported file)
 * @param {string} alt - image alt text
 * @param {string} caption - image captions (obtional)
 * @param {string} maxWidth - max image width (default: 70%)
 */
const DocImage = ({ src, caption, alt, maxWidth = "70%" }) => {
  // console.log(`${maxWidth}: ${caption}`);
  return (
    <figure className="my-8 flex flex-col items-center">
      {/* <figure className="my-8 flex flex-col"> */}
      <div
        className="overflow-hidden rounded-xl border border-gray-200 shadow-md bg-gray-50"
        style={{
          maxWidth: maxWidth,
          width: "100%",
        }}
      >
        <img
          src={src}
          alt={alt || "Description"}
          className="w-full h-auto object-cover block transition-transform duration-300 hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-500 font-medium text-center">
          {/* <figcaption className="mt-3 text-sm text-gray-500 font-medium"> */}
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default DocImage;
