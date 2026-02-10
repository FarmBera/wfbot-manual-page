import React from "react";
import {tw} from "../style/tailwind";

interface DocImageProps {
    src: string;
    caption: string | React.ReactNode;
    maxWidth?: string;
}

/** Image components for manual */
const DocImage: React.FC<DocImageProps> = ({src, caption, maxWidth = "60%"}) => {
    const textCaption: string = typeof caption === 'string' ? caption : "image for unknown";

    return (<figure className="my-8 flex flex-col items-center">
        {/* <figure className="my-8 flex flex-col"> */}
        <div
            className={`overflow-hidden rounded-xl border ${tw.border.dim} shadow-md dark:shadow-xl bg-gray-50 ${tw.tcd}`}
            style={{maxWidth: maxWidth, width: "100%"}}>
            <img src={src} alt={textCaption} loading="lazy"
                 className="w-full h-auto object-cover block transition-transform duration-300 hover:scale-[1.03]"/>
        </div>
        {caption && (
            <figcaption className={`mt-3 text-sm ${tw.txt.dim} font-medium text-center ${tw.tcd}`}>
                {caption}
            </figcaption>)}
    </figure>);
};

export default DocImage;
