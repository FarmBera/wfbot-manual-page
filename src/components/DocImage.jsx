import React from "react";
import { tw } from "../style/tailwind";

/**
 * Image components for manual
 * @param {string} src - img path (URL or imported file)
 * @param {string} alt - image alt text
 * @param {string} caption - image captions (obtional)
 * @param {string} maxWidth - max image width (default: 70%)
 */
const DocImage = ({ src, caption, alt, maxWidth = "60%" }) => {
  // console.log(`${maxWidth}: ${caption}`);
  return (
    <figure className="my-8 flex flex-col items-center">
      {/* <figure className="my-8 flex flex-col"> */}
      <div
        className={`overflow-hidden rounded-xl border ${tw.border.dim} shadow-md dark:shadow-xl bg-gray-50 ${tw.tcd}`}
        style={{
          maxWidth: maxWidth,
          width: "100%",
        }}
      >
        <img
          src={src}
          // alt='이미지를 찾을 수 없습니다.'
          alt={caption || "Description"}
          className="w-full h-auto object-cover block transition-transform duration-300 hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption
          className={`mt-3 text-sm ${tw.txt.dim} font-medium text-center ${tw.tcd}`}
        >
          {/* <figcaption className="mt-3 text-sm text-gray-500 font-medium"> */}
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default DocImage;
