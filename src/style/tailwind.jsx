export const COLOR = "sky";

export const TXT_SIZE = "text-md";

export const tw = {
  tc: "transition-colors", d2: "duration-200", tcd: "transition-colors duration-500",

  txt: {
    bright: "text-gray-950 dark:text-gray-50",
    white: "text-gray-900 dark:text-gray-100",
    light: "text-gray-700 dark:text-gray-200",
    normal: "text-gray-600 dark:text-gray-300", // p: "text-gray-600 dark:text-gray-200",
    // nd: "text-gray-600 dark:text-gray-400",
    dim: "text-gray-500 dark:text-gray-400",
    dark: "text-gray-400 dark:text-gray-500",
    deep: "text.gray-300 dark:text-gray-600",

    grave: "text-green-700 dark:text-green-500 bg-yellow-200 dark:bg-yellow-900",

    theme: `text-sky-600 dark:text-sky-400`,
    themeHover: `hover:text-sky-950 dark:hover:text-sky-100`,
    themeHoverBg: `hover:bg-sky-100 dark:hover:bg-gray-700`,

    red: "text-red-500 dark:text-red-500",
    orange: "text-orange-500 dark:text-orange-400",
    yellow: "text-yellow-600 dark:text-yellow-400",
    green: "text-green-500 dark:text-green-400",
    sky: "text-sky-500 dark:text-sky-400",
    blue: "text-blue-500 dark:text-blue-400",

    violet: "text-violet-600 dark:text-violet-300",

    // link
  },

  bold: {
    b: "font-bold", eb: "font-extrabold", // font-thin
    // font-extralight
    // font-light
    // font-normal
    // font-medium
    // font-semibold
    // font-bold
    // font-extrabold
    // font-black
  },

  border: {
    theme: `border-${COLOR}-200 dark:border-${COLOR}-700`,
    bright: "hover:bg-gray-50 dark:hover:bg-gray-800",
    normal: "hover:border-gray-300 dark:hover:border-gray-500",
    gray: "border-gray-100 dark:border-gray-600",
    dim: "border-gray-200 dark:border-gray-600",
    dark: "border-gray-300 dark:border-gray-600",
  },

  bg: {
    dim: "bg-white dark:bg-gray-800",
    black: "bg-white dark:bg-gray-900",
    bright: "bg-gray-50 dark:bg-gray-700",
    main: "bg-gray-50 dark:bg-zinc-900",
    point: "bg-white dark:bg-gray-800",

    hover: "hover:bg-gray-100 dark:hover:bg-gray-700",

    theme: `bg-sky-100 dark:bg-sky-900`,
  },

  // light
  l: {
    bg_main: "bg-white", bg_gray: "bg-gray-50",
  }, // dark
  d: {
    bg_main: "dark:bg-gray-800", bg_gray: "dark:bg-gray-900",
  }, a: {
    txt: "text-blue-600 dark:text-blue-400 font-bold underline", hover: "hover:text-cyan-400 dark:hover:text-cyan-100",
  },

  // desktop header
  head: {
    bg: "bg-indigo-100 dark:bg-indigo-900/50", // background
  }, main: {
    bg: "bg-gray-50 dark:bg-neutral-900",
    secBg: "bg-white dark:bg-gray-800",
    secIconBg: "bg-indigo-50 dark:bg-indigo-900",
  }, // button
  btn: {
    // txt: "text-gray-600 dark:text-gray-400",
    txtHover: "hover:text-indigo-600 dark:hover:text-indigo-400",
  },
};

export const htags = {
  pTag: `${tw.txt.normal} leading-relaxed mb-6 ${TXT_SIZE} ${tw.tcd}`,
  graveTag: `${tw.txt.grave} ${TXT_SIZE} ${tw.tcd}`,

  ulTag: `list-disc pl-7 space-y-2 ${tw.txt.normal} mb-10 ${TXT_SIZE}`,
  olTag: `list-decimal pl-5 space-y-2 ${tw.txt.normal} mb-10 ${TXT_SIZE}`,

  // mb-3 scroll-mt-24 flex items-center
  H4: `text-xl ${tw.txt.bright} ${tw.tcd} mb-4`,
};
