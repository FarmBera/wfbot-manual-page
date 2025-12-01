import React, { useState, useEffect, useRef } from "react";
import {
  Book,
  Menu,
  X,
  ChevronRight,
  Search,
  Globe,
  ChevronDown,
  Check,
  Moon,
  Sun,
} from "lucide-react";

// import { manualData } from "./data/manualData";
import { APP_INFO, UI_TEXTS } from "./constants/constants";
import { getManualSections } from "./data/manualData";
import { COMMON } from "./constants/common";
import { tw } from "./style/tailwind";
// eslint-disable-next-line
import { A } from "./ui/CustomElements";

const MOBILE_UI_SIZE = 768; // Tailwind CSS mobile UI size breakpoint

const UserManual = () => {
  // default language
  const [lang, setLang] = useState("ko");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // init selection
  const [activeSection, setActiveSection] = useState("intro");
  // state that manage section ID
  const [expandedIds, setExpandedIds] = useState(["intro"]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // mobile UI detection
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_UI_SIZE);

  // dark mode status (detect system setting)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (typeof window !== "undefined") {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  const contentRef = useRef(null);
  const sidebarRef = useRef(null); // ref for access 'sidebar navigation DOM'

  // track last activated parent sections (for sidebar auto expand)
  // const lastActiveParentRef = useRef(null);

  // create section structure based on current lang object
  const uiText = UI_TEXTS[lang];
  const currentSections = getManualSections(uiText, isMobile);

  const languages = [
    { code: "ko", label: "한국어" },
    { code: "en", label: "English" },
  ];

  // section movement handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "instant", block: "start" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // menu fold/unfold toggle handler
  const toggleExpand = (sectionId) => {
    setExpandedIds(
      (prev) =>
        prev.includes(sectionId)
          ? prev.filter((id) => id !== sectionId) // collapse: remove if exists
          : [...prev, sectionId] // expand: add if not exists
    );
  };

  // onclick sidebar item (move + toggle)
  const handleItemClick = (e, section) => {
    // move to that session
    scrollToSection(section.id);

    // automatic sidebar expand (toggle)
    // if (section.subSections && section.subSections.length > 0)
    //   toggleExpand(section.id);
  };

  // on select language
  const handleLangSelect = (code) => {
    setLang(code);
    setIsLangMenuOpen(false);
  };

  // toggle dark mode
  const toggleDarkMode = () => {
    // console.log("clicked toggleDarkMode");
    // console.log(`isDarkMode > ${isDarkMode}`);
    setIsDarkMode(!isDarkMode);
    // console.log(`isDarkMode > ${isDarkMode}`);
  };

  // detect scroll & auto sidebar expand
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = contentRef.current.scrollTop + 120;

      const allTrackableItems = currentSections.flatMap((section) => {
        const items = [section];
        if (section.subSections) items.push(...section.subSections);

        return items;
      });

      let currentItem = null;
      for (const item of allTrackableItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) currentItem = item;
        }
      }

      if (currentItem) {
        setActiveSection(currentItem.id);

        // auto sidebar expand

        // find top parent section that currently enabled
        // const parentSection = currentSections.find(
        //   (sec) =>
        //     sec.id === currentItem.id ||
        //     sec.subSections?.some((sub) => sub.id === currentItem.id)
        // );

        // if (parentSection) {
        //   // expand section only when entered new section (if user manually collapsed, do nothing)
        //   if (lastActiveParentRef.current !== parentSection.id) {
        //     setExpandedIds((prev) => {
        //       if (!prev.includes(parentSection.id)) {
        //         return [...prev, parentSection.id];
        //       }
        //       return prev;
        //     });
        //     lastActiveParentRef.current = parentSection.id;
        //   }
        // }
      }
    };

    // setup event listener
    const scrollContainer = contentRef.current;
    if (scrollContainer)
      scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollContainer)
        scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [currentSections]);

  // automatic sidebar scroll (executes every activeSection changes)
  useEffect(() => {
    if (activeSection && sidebarRef.current) {
      // find activated menu item using data-section-id
      const activeElement = sidebarRef.current.querySelector(
        `[data-section-id="${activeSection}"]`
      );

      if (activeElement) {
        // automatic adjust scroll to show activated section title
        activeElement.scrollIntoView({
          behavior: "smooth",
          // block: "nearest",
        });
      }
    }
  }, [activeSection]);

  // close lang dropdown menu onclick other area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangMenuOpen && !event.target.closest(".lang-dropdown")) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangMenuOpen]);

  // resize event listener (detect screen size changes)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_UI_SIZE);
    window.addEventListener("resize", handleResize);
    // cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // apply dark mode
  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <div
      // text-gray-800 dark:text-gray-100 ${tw.light.bg_gray} ${tw.dark.bg_gray}
      className={`flex h-screen font-sans overflow-hidden ${tw.tcd}`}
    >
      {/* mobile header */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-14 ${tw.l.bg_main} ${tw.d.bg_main} border-b dark:border-gray-700 z-20 flex items-center justify-between px-4 shadow-sm ${tw.tcd}`}
      >
        <div
          className={`flex items-center space-x-2 font-bold ${tw.txt.indigo}`}
        >
          <Book size={20} />
          <span>
            {COMMON.name} {uiText.docTitle}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          {/* mobile dark mode toggle btn */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 ${tw.txt.indigo} ${tw.txt.indigoHover} ${tw.txt.indigoHoverBg} ${tw.btn.d} ${tw.btn.dh} ${tw.tcd}`}
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <div className="relative lang-dropdown">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center space-x-1 p-2 ${tw.txt.indigo} ${tw.txt.indigoHover} ${tw.txt.indigoHoverBg} ${tw.btn.d} ${tw.btn.dh} ${tw.tc}`}
            >
              <Globe size={20} />
              <ChevronDown
                size={14}
                className={`transition-transform ${tw.d2} ${
                  isLangMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangMenuOpen && (
              <div
                className={`absolute right-0 top-full mt-2 w-32 ${tw.bg.dim} border ${tw.border.gray} rounded-lg shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 ${tw.tcd}`}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangSelect(l.code)}
                    className={`
                      w-full text-left px-4 py-2.5 text-sm flex items-center justify-between ${
                        tw.txt.indigo
                      } ${tw.txt.indigoHoverBg} ${tw.tc} ${tw.d2}
                      ${
                        lang === l.code
                          ? `${tw.txt.indigo} font-lg ${tw.bg.indigo} ${tw.tcd}`
                          : `${tw.txt.normal} ${tw.tc} ${tw.d2}`
                      }
                    `}
                  >
                    {l.label}
                    {lang === l.code && <Check size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${tw.txt.normal}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* sidebar */}
      <aside
        className={`
          fixed md:relative z-10 
          w-64 md:w-1/4 h-full bg-white dark:bg-gray-800 border-r ${
            tw.border.gray2
          }
          flex flex-col transition-transform duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
          pt-14 md:pt-0
        `}
      >
        {/* desktop header */}
        <div
          className={`hidden md:flex items-center justify-between p-6 border-b ${tw.border.gray} ${tw.tcd}`}
        >
          {/* text area */}
          <div className="flex items-center space-x-3">
            <div
              className={`${tw.head.bg} p-2 rounded-lg ${tw.txt.indigo} ${tw.tcd}`}
            >
              <Book size={24} />
            </div>
            <div>
              <h1 className={`font-bold text-lg ${tw.txt.bright} ${tw.tcd}`}>
                {uiText.docTitle}
              </h1>
              <p className={`text-xs ${tw.txt.dim} ${tw.tcd}`}>
                {APP_INFO.version}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* btn: dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 ${tw.tcd}`}
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* btn: select language (dropdown) */}
            <div className="relative lang-dropdown">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 ${tw.txt.normal} transition-all border border-transparent hover:border-gray-200 dark:hover:border-gray-600`}
              >
                <Globe size={18} />
                <span className="text-sm font-medium">
                  {languages.find((l) => l.code === lang).label}
                </span>
                <ChevronDown
                  size={14}
                  className={`${
                    tw.txt.dark
                  } transition-transform duration-200 ${
                    isLangMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangMenuOpen && (
                <div
                  className={`absolute right-0 top-full mt-2 w-36 ${tw.bg.dim} rounded-xl shadow-xl border ${tw.border.gray} py-1.5 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100`}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLangSelect(l.code)}
                      className={`
                      w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
                      ${
                        lang === l.code
                          ? `${tw.txt.indigo} font-bold bg-indigo-50/30 dark:bg-indigo-900/30`
                          : `${tw.txt.normal}`
                      }
                    `}
                    >
                      {l.label}
                      {lang === l.code && <Check size={16} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* search bar */}
        <div className="p-4 pb-0">
          <div className="relative">
            <Search
              className={`absolute left-3 top-2.5 ${tw.txt.dark}`}
              size={16}
            />
            <input
              type="text"
              disabled={true}
              placeholder={uiText.searchPlaceholder}
              className={`w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow ${tw.tcd}`}
            />
          </div>
        </div>

        {/* navigation menu */}
        <nav ref={sidebarRef} className="flex-1 overflow-y-auto p-4 space-y-1">
          <div
            className={`text-xs font-semibold ${tw.txt.dark} uppercase tracking-wider mb-2 ml-2 mt-2 ${tw.tcd}`}
          >
            {uiText.contents}
          </div>
          {currentSections.map((section) => {
            const isExpanded = expandedIds.includes(section.id);
            const isActive =
              activeSection === section.id ||
              section.subSections?.some((sub) => sub.id === activeSection);
            const hasSubSections =
              section.subSections && section.subSections.length > 0;

            return (
              <div key={section.id} className="mb-1">
                <div
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all cursor-pointer
                    sticky top-[-16px] z-10
                    ${
                      isActive
                        ? `${tw.main.secIconBg} shadow-sm`
                        : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }
                  `}
                  onClick={(e) => handleItemClick(e, section)}
                >
                  {/* main link */}
                  <button
                    data-section-id={section.id}
                    className={`
                      flex-1 flex items-center space-x-3 text-sm font-medium text-left bg-transparent
                      ${
                        isActive
                          ? "text-indigo-700 dark:text-indigo-400"
                          : `${tw.txt.normal}`
                      }
                    `}
                  >
                    <span
                      className={`transition-colors ${
                        isActive ? `${tw.txt.indigo}` : `${tw.txt.dark}`
                      }`}
                    >
                      {section.icon}
                    </span>
                    <span>{section.title}</span>
                  </button>

                  {/* expand/collapse icon */}
                  {hasSubSections && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(section.id);
                      }}
                      className={`
                        p-1 rounded-md transition-colors ml-1
                        ${
                          isActive
                            ? "text-indigo-500 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
                            : `${tw.txt.dark} hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-600 dark:hover:text-gray-300`
                        }
                      `}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* render 2nd category */}
                {hasSubSections && isExpanded && (
                  <div className="mt-1 ml-4 pl-4 border-l-2 border-indigo-100 dark:border-indigo-900/50 space-y-1 animate-in slide-in-from-top-2 duration-300">
                    {section.subSections.map((sub) => (
                      <button
                        key={sub.id}
                        data-section-id={sub.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToSection(sub.id);
                        }}
                        className={`
                          w-full text-left px-3 py-2 text-sm rounded-md transition-colors truncate
                          ${
                            activeSection === sub.id
                              ? `${tw.txt.indigo} font-semibold bg-indigo-50/50 dark:bg-indigo-900/30`
                              : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }
                        `}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div
          className={`p-4 border-t ${tw.border.gray2} text-xs text-center ${tw.txt.dark} ${tw.tcd}`}
        >
          {uiText.copyright}
        </div>
      </aside>

      {/* main content (manual page) */}
      {/* {isMobileMenuOpen && ( */}
      {lang === languages[1].code ? (
        // temporary: english manual page
        <main
          ref={contentRef}
          className="flex-1 w-full md:w-3/4 h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 scroll-smooth relative"
        >
          <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 mt-10 md:mt-0">
            <section className="mb-16 scroll-mt-20 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 transition-all hover:shadow-md">
              <div className="space-y-6">
                <h1 className={`text-3xl font-bold ${tw.txt.bright} mb-4`}>
                  We're Sorry.
                </h1>

                <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                      <Globe size={50} className="text-indigo-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-2 py-5">
                    Translation in Progress
                  </h3>
                  <p className={`${tw.txt.normal} leading-relaxed mb-4`}>
                    The English Version of the{" "}
                    <strong>{uiText.serviceName}</strong> manual is currently
                    under development.
                    <br />
                    We are working hard to provide high-quality documentation
                    for our global users.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Please refer to the Korean version for the time being.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      ) : (
        // korean web page
        <main
          ref={contentRef}
          className={`flex-1 w-full md:w-3/4 h-full overflow-y-auto ${tw.main.bg} scroll-smooth relative ${tw.tcd}`}
        >
          <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 mt-10 md:mt-0">
            {currentSections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={`mb-16 scroll-mt-20 ${tw.main.secBg} p-8 rounded-xl shadow-sm border ${tw.border.gray} transition-all hover:shadow-md ${tw.tcd}`}
              >
                <div
                  className={`flex items-center space-x-3 mb-6 pb-4 border-b ${tw.border.gray} ${tw.tcd}`}
                >
                  <div
                    className={`p-2 ${tw.main.secIconBg} rounded-lg ${tw.txt.indigo} ${tw.tcd}`}
                  >
                    {section.icon}
                  </div>
                  <h2
                    className={`text-2xl font-bold ${tw.txt.bright} ${tw.tcd}`}
                  >
                    {section.title}
                  </h2>
                </div>

                <div
                  className={`prose prose-indigo dark:prose-invert max-w-none ${tw.txt.normal} ${tw.tcd}`}
                >
                  {section.content}
                </div>

                {/* link: go to next section */}
                {index < currentSections.length - 1 && (
                  <div
                    className={`mt-10 pt-6 border-t border-dashed ${tw.border.gray2} flex justify-end ${tw.tcd}`}
                  >
                    <button
                      onClick={() =>
                        scrollToSection(currentSections[index + 1].id)
                      }
                      className={`group flex items-center text-sm font-medium ${tw.txt.indigo} hover:text-indigo-800 dark:hover:text-indigo-300 ${tw.tcd}`}
                    >
                      {uiText.next}:{" "}
                      {currentSections[index + 1].title.split(". ")[1] ||
                        currentSections[index + 1].title}
                      <ChevronRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                )}
              </section>
            ))}

            {/* footer msg */}
            <div
              className={`text-center py-10 ${tw.txt.dark} text-sm ${tw.tcd}`}
            >
              {uiText.footerMsg}
              {/* <br /> */}
              {/* {uiText.contactSupport} */}
              {/* <A href="." text={uiText.contactSupport} /> */}
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default UserManual;
