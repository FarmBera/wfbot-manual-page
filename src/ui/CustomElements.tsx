import React from "react";
import {Info, Lightbulb, TriangleAlert} from "lucide-react";

import {tw, TXT_SIZE} from "../style/tailwind";
import DocLink from "../components/DocLink";

// style types
type ColorKey = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'cyan' | 'indigo';
type IconKey = 'info' | 'tip' | 'alert';

interface StyleConfig {
    container: string;
    text: string;
}

const styles: Record<ColorKey, StyleConfig> = {
    red: {
        container: "bg-red-50 dark:bg-orange-950 border-red-500", text: "text-red-700 dark:text-red-200",
    },
    orange: {
        container: "bg-orange-50 dark:bg-orange-950 border-orange-500", text: "text-orange-700 dark:text-orange-200",
    },
    yellow: {
        container: "bg-yellow-50 dark:bg-yellow-950 border-yellow-500", text: "text-yellow-700 dark:text-yellow-200",
    },
    green: {
        container: "bg-green-50 dark:bg-green-900 border-green-500", text: "text-green-700 dark:text-green-200",
    },
    blue: {
        container: "bg-blue-50 dark:bg-blue-900 border-blue-500", text: "text-blue-700 dark:text-blue-200",
    },
    cyan: {
        container: "bg-cyan-50 dark:bg-cyan-900 border-cyan-500", text: "text-cyan-700 dark:text-cyan-200",
    },
    indigo: {
        container: "bg-indigo-50 dark:bg-indigo-900 border-indigo-500", text: "text-indigo-700 dark:text-indigo-200",
    },
};

const icons: Record<IconKey, React.ReactNode> = {
    info: <Info/>, tip: <Lightbulb/>, alert: <TriangleAlert/>,
};

// component props interfaces
interface TextProps {
    text?: React.ReactNode;
}

interface LinkProps {
    text?: string;
    href?: string;
}

interface HeadingProps {
    text: string;
    id?: string;
}

interface GridItem {
    id: string;
    title: string;
}

interface GridProps {
    content: GridItem[];
}

interface NoteProps {
    color?: ColorKey;
    icon: IconKey;
    title?: string;
    text: React.ReactNode;
}

export const P: React.FC<TextProps> = ({text}) => {
    return (<div className={`${tw.txt.normal} leading-relaxed mb-6 ${TXT_SIZE} ${tw.tcd}`}>
        {text}
    </div>);
};

export const A: React.FC<LinkProps> = ({text, href}) => {
    return (<a href={href} target="_blank" rel="noreferrer"
               className={`${tw.a.txt} ${tw.a.hover} font-bold underline ${tw.tc} ${tw.d2}`}>
        {text}
    </a>);
};

export const BOLD: React.FC<TextProps> = ({text}) => {
    return <strong className={`${tw.bold.eb}`}>{text}</strong>;
};

export const HR: React.FC = () => {
    return (<hr className={`${tw.border.dark} my-8 transition-colors duration-1000`}/>);
};

export const H2_4XL: React.FC<HeadingProps> = ({text}) => {
    return (
        <h2 className={`text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-1000`}>
            {text}
        </h2>);
};

export const H2: React.FC<HeadingProps> = ({text}) => {
    return (
        <h2 className="text-2xl mb-5 font-semibold text-gray-800 dark:text-slate-100 transition-colors duration-1000">
            {text}
        </h2>);
};

export const H3: React.FC<HeadingProps> = ({id, text}) => {
    return (<h3
        id={id}
        className="text-2xl font-bold text-gray-800 dark:text-indigo-100 mb-3 scroll-mt-24 flex items-center transition-colors duration-1000">
        <span className={`${tw.txt.theme} mr-2 transition-colors duration-1000`}>#</span>
        {text}
    </h3>);
};

export const H4: React.FC<HeadingProps> = ({id, text}) => {
    return (<h4 id={id} className={`text-xl ${tw.txt.bright} mb-3 scroll-mt-24 flex items-center ${tw.tcd}`}>
        {text}
    </h4>);
};

export const UL_LINK_GRID: React.FC<GridProps> = ({content}) => {
    // // sort logic
    // const sortedContent = React.useMemo(() => [...content].sort((a, b) => {
    //   const titleA = a.title || '';
    //   const titleB = b.title || '';
    //   return String(titleA).localeCompare(String(titleB));
    // }), [content]);

    return (<div
        className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 mb-8 transition-colors duration-1000">
        <ul className={`columns-2 gap-4 ${TXT_SIZE} text-gray-600 dark:text-gray-200 transition-colors duration-1000`}>
            {content.map((cmd) => (
                // grid grid-cols-2 -> columns-2 (세로 방향 흐름으로 변경)
                // gap-2 -> gap-4 (컬럼 사이 간격, 필요에 따라 조절)
                <li key={cmd.id} className="break-inside-avoid mb-1">
                    <DocLink to={cmd.id}>{cmd.title}</DocLink>
                </li>))}
        </ul>
    </div>);
};

// const UL_LINK_GRID = ({ content }) => {
//   return (
//     // <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
//     <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
//       {/* <p className="text-gray-600">클릭하면 해당 명령어 가이드로 이동합니다.</p> */}
//       {/* <h4 className="font-semibold text-gray-700 mb-2">클릭하면 해당 명령어 가이드로 이동합니다.</h4> */}
//       <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
//         {content.map((cmd) => (
//           <li key={cmd.id}>
//             <DocLink to={cmd.id}>{cmd.title}</DocLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export const NOTE: React.FC<NoteProps> = ({color = "blue", icon, title = "Note", text}) => {
    // use default color
    const currentStyle = styles[color] || styles.blue;

    return (<div className={`${currentStyle.container} border-l-4 p-4 mt-4 rounded-md ${tw.tcd}`}>
        <div className={`${TXT_SIZE} ${currentStyle.text}`}>
            <div className="flex items-center gap-2">
                <span>{icons[icon]}</span>
                {title && <strong className="text-2xl">{title}</strong>}
            </div>
            <br/>
            {text}
        </div>
    </div>);
};

const CustomElements = {P, A, BOLD, HR, H2, H2_4XL, H3, H4, UL_LINK_GRID, NOTE};
export default CustomElements;
