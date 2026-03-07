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

    return (<figure className="my-8 flex flex-col items-center select-none">
        {/* <figure className="my-8 flex flex-col"> */}
        <div
            className={`w-full max-w-[90%] md:max-w-(--desktop-max-w) overflow-hidden rounded-xl border ${tw.border.dim} shadow-md dark:shadow-xl bg-gray-50 ${tw.tcd}`}
            style={{'--desktop-max-w': maxWidth} as React.CSSProperties}
        >
            <img src={src} alt={textCaption} loading="lazy" unselectable='on'
                 className="w-full h-auto object-cover block transition-transform duration-300 hover:scale-[1.03] select-none"/>
        </div>
        {caption && (
            <figcaption className={`mt-3 text-sm ${tw.txt.dim} font-medium text-center ${tw.tcd}`}>
                {caption}
            </figcaption>
        )}
    </figure>);
};

export default DocImage;
