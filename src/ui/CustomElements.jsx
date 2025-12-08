import React from "react";
import { Info, Lightbulb, TriangleAlert } from "lucide-react";

import { tw, TXT_SIZE } from "../style/tailwind";
import DocLink from "../components/DocLink";

const styles = {
  red: {
    container: "bg-red-50 dark:bg-orange-950 border-red-500",
    text: "text-red-700 dark:text-red-200",
  },
  orange: {
    container: "bg-orange-50 dark:bg-orange-950 border-orange-500",
    text: "text-orange-700 dark:text-orange-200",
  },
  yellow: {
    container: "bg-yellow-50 dark:bg-yellow-950 border-yellow-500",
    text: "text-yellow-700 dark:text-yellow-200",
  },
  green: {
    container: "bg-green-50 dark:bg-green-900 border-green-500",
    text: "text-green-700 dark:text-green-200",
  },
  blue: {
    container: "bg-blue-50 dark:bg-blue-900 border-blue-500",
    text: "text-blue-700 dark:text-blue-200",
  },
  cyan: {
    container: "bg-cyan-50 dark:bg-cyan-900 border-cyan-500",
    text: "text-cyan-700 dark:text-cyan-200",
  },
  indigo: {
    container: "bg-indigo-50 dark:bg-indigo-900 border-indigo-500",
    text: "text-indigo-700 dark:text-indigo-200",
  },
};
const icons = {
  info: <Info />,
  tip: <Lightbulb />,
  alert: <TriangleAlert />,
};

export const P = ({ text }) => {
  return (
    <div
      className={`${tw.txt.normal} leading-relaxed mb-6 ${TXT_SIZE} ${tw.tcd}`}
    >
      {text}
    </div>
  );
};

export const A = ({ text, href }) => {
  // hover:text-indigo-800 dark:hover:text-indigo-300
  // tw.a.txt
  return (
    <a
      className={`${tw.a.txt} ${tw.a.hover} font-bold underline ${tw.tc} ${tw.d2}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export const BOLD = ({ text }) => {
  return <strong className={`${tw.bold.eb}`}>{text}</strong>;
};

export const HR = () => {
  return (
    <hr className={`${tw.border.dark} my-8 transition-colors duration-1000`} />
  );
};

export const H2_4XL = ({ text }) => {
  return (
    <h2
      className={`text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-1000`}
    >
      {text}
    </h2>
  );
};

export const H2 = ({ text }) => {
  return (
    <h2 className="text-2xl mb-5 font-semibold text-gray-800 dark:text-slate-100 transition-colors duration-1000">
      {text}
    </h2>
  );
};

export const H3 = ({ id, text }) => {
  return (
    <h3
      id={id}
      className="text-2xl font-bold text-gray-800 dark:text-indigo-100 mb-3 scroll-mt-24 flex items-center transition-colors duration-1000"
    >
      <span className={`${tw.txt.theme} mr-2 transition-colors duration-1000`}>
        #
      </span>
      {text}
    </h3>
  );
};

export const H4 = ({ id, text }) => {
  return (
    <h4
      id={id}
      // font-bold
      className={`text-xl ${tw.txt.bright} mb-3 scroll-mt-24 flex items-center ${tw.tcd}`}
    >
      {text}
    </h4>
  );
};

export const UL_LINK_GRID = ({ content }) => {
  return (
    // <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
    <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 mb-8 transition-colors duration-1000">
      {/* <p className="text-gray-600">클릭하면 해당 명령어 가이드로 이동합니다.</p> */}
      {/* <h4 className="font-semibold text-gray-700 mb-2">클릭하면 해당 명령어 가이드로 이동합니다.</h4> */}
      <ul
        className={`grid grid-cols-2 md:grid-cols-3 gap-2 ${TXT_SIZE} text-gray-600 dark:text-gray-200 transition-colors duration-1000`}
      >
        {content.map((cmd) => (
          <li key={cmd.id}>
            <DocLink to={cmd.id}>{cmd.title}</DocLink>
          </li>
        ))}
      </ul>
    </div>
  );
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

/**
 * Note components for emphasis
 * @param {string} color - theme color
 * @param {string} title - title text (default: 'Note')
 * @param {ReactNode} text - content text
 */
export const NOTE = ({ color = "blue", icon, title = "Note", text }) => {
  // use default color
  const currentStyle = styles[color] || styles.blue;

  return (
    <div
      className={`${currentStyle.container} border-l-4 p-4 mt-4 rounded-md ${tw.tcd}`}
    >
      <div className={`${TXT_SIZE} ${currentStyle.text}`}>
        <div className="flex items-center gap-2">
          <span>{icons[icon]}</span>
          {title && <strong className="text-2xl">{title}</strong>}
        </div>
        <br />
        {text}
      </div>
    </div>
  );
};

// eslint-disable-next-line
export default { P, A, BOLD, HR, H2, H2_4XL, H3, H4, UL_LINK_GRID, NOTE };
