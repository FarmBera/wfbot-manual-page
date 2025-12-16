import { React, useState, useEffect, useRef } from "react";
import {
  // Book,
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
import { tw } from "./style/tailwind";
import BotLogo from "./components/BotLogo";

// define fixed width constants and trigger point
const SIDEBAR_WIDTH = 410; // Sidebar fixed width (px)
const CONTENT_WIDTH = 860; // Content fixed width (px)
const TOTAL_WIDTH_TRIGGER = SIDEBAR_WIDTH + CONTENT_WIDTH; // trigger mobile mode if window is smaller than this

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
  // update initial mobile state logic to use TOTAL_WIDTH_TRIGGER
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined")
      return window.innerWidth < TOTAL_WIDTH_TRIGGER;
    return false;
  });

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
  const initialScrollDone = useRef(false);
  const isProgrammaticScroll = useRef(false);

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
    const currentUrl = new URL(window.location);

    if (element) {
      isProgrammaticScroll.current = true;
      setTimeout(() => {
        element.scrollIntoView({ behavior: "instant", block: "start" });
        setActiveSection(id);
        setIsMobileMenuOpen(false);

        currentUrl.searchParams.set("id", id);
        window.history.pushState({}, "", currentUrl);
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 3000); // Allow time for scroll correction
      }, 10); // A small delay to ensure rendering before scroll
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
    setIsDarkMode(!isDarkMode);
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

  // on initial component load, check for 'id' query parameter
  useEffect(() => {
    // Prevent re-running if initial scroll is done or sections are not loaded yet.
    if (initialScrollDone.current || currentSections.length === 0) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      // Use a timeout to ensure the element is rendered before scrolling.
      setTimeout(() => {
        scrollToSection(id);
        setActiveSection(id);
        initialScrollDone.current = true;
      }, 0);
    }
    // eslint-disable-next-line
  }, [lang, isMobile]); // Run only when language or mobile status changes.

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
          block: "center",
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

  // Re-scroll to the active section when images load to correct the position
  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    const handleImageLoad = () => {
      if (isProgrammaticScroll.current) {
        const element = document.getElementById(activeSection);
        if (element) {
          element.scrollIntoView({ behavior: "instant", block: "start" });
        }
      }
    };

    const images = contentEl.getElementsByTagName("img");
    Array.from(images).forEach((img) => {
      img.addEventListener("load", handleImageLoad);
    });

    return () => {
      Array.from(images).forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
    // eslint-disable-next-line
  }, [lang, currentSections]); // Re-attach listeners when content changes

  // update resize handler to use TOTAL_WIDTH_TRIGGER
  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth < TOTAL_WIDTH_TRIGGER);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      // text-gray-800 dark:text-gray-100 ${tw.light.bg_gray} ${tw.dark.bg_gray}
      className={`flex h-screen font-sans overflow-hidden break-keep ${tw.tcd}`}
    >
      {/* mobile header */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 w-full h-14 ${tw.l.bg_main} border-b dark:border-gray-700 z-20 flex items-center justify-between px-4 shadow-lg ${tw.tcd} ${tw.bg.dim}`}
        >
          <div
            className={`flex items-center space-x-2 font-bold ${tw.txt.theme}`}
          >
            {/* <Book size={20} /> */}
            <BotLogo />
            <span className="text-xl">{uiText.docTitle}</span>
          </div>
          <div className="flex items-center space-x-2">
            {/* mobile dark mode toggle btn */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 ${tw.txt.theme} ${tw.txt.themeHover} ${tw.txt.themeHoverBg} ${tw.tcd}`}
            >
              {isDarkMode ? <Moon size={28} /> : <Sun size={28} />}
            </button>

            {/* language dropdown */}
            <div className="relative lang-dropdown">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-1 p-2 ${tw.txt.theme} ${tw.txt.themeHover} ${tw.txt.themeHoverBg} ${tw.tc}`}
              >
                <Globe size={26} />
                <ChevronDown
                  size={20}
                  className={`transition-transform ${tw.d2} ${
                    isLangMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* lang menu pop-up */}
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
                        tw.txt.theme
                      } ${tw.txt.themeHoverBg} ${tw.tc} ${tw.d2}
                      ${
                        lang === l.code
                          ? `${tw.txt.theme} font-lg ${tw.bg.indigo} ${tw.tcd}`
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
              {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      )}
      {/* sidebar */}
      <aside
        style={{
          width: isMobile ? "399px" : `${SIDEBAR_WIDTH}px`,
          maxWidth: "100%",
        }}
        className={`
          z-30 h-full ${tw.bg.point} border-r ${tw.border.dim}
          flex flex-col transition-transform duration-300 ease-in-out
          ${
            isMobile
              ? `fixed top-0 left-0 pt-14 shadow-2xl ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`
              : `relative translate-x-0 pt-0`
          }
        `}
      >
        {/* desktop header */}
        {!isMobile && (
          <div
            className={`flex items-center justify-between p-4 border-b ${tw.border.gray} ${tw.tcd}`}
          >
            {/* text area */}
            <div className="flex items-center space-x-2">
              <div
                // className: "p-2"
                className={`p-0 rounded-lg ${tw.txt.theme} ${tw.tcd}`}
              >
                <BotLogo /> {/* <Book size={24} /> */}
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
                className={`p-2 rounded-lg ${tw.txt.theme} ${tw.txt.themeHover} ${tw.txt.themeHoverBg} border ${tw.border.dim}  ${tw.d2}`}
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
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${tw.txt.normal} ${tw.txt.themeHover} ${tw.txt.themeHoverBg} transition-all border ${tw.border.dim}`}
                >
                  <Globe size={18} className={`${tw.txt.theme}`} />
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
                          ? `${tw.txt.theme} font-bold ${tw.bg.theme}`
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
        )}

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
              className={`w-full pl-9 pr-4 py-2 ${tw.bg.bright} border ${tw.border.dim} rounded-md text-sm ${tw.txt.light} focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow ${tw.tcd}`}
            />
          </div>
        </div>

        {/* navigation menu */}
        <nav ref={sidebarRef} className="flex-1 overflow-y-auto p-4 space-y-1">
          <div
            className={`text-xl center font-semibold ${tw.txt.dark} uppercase tracking-wider mb-2 ml-2 mt-2 ${tw.tcd}`}
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
                    w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all cursor-pointer sticky top-[-16px] z-10
                    ${
                      isActive
                        ? `${tw.bg.theme} shadow-lg`
                        : `${tw.bg.dim} ${tw.bg.hover}`
                    }
                  `}
                  onClick={(e) => handleItemClick(e, section)}
                >
                  {/* main link */}
                  <button
                    data-section-id={section.id}
                    className={`
                      flex-1 flex items-center space-x-3 text-md font-medium text-left bg-transparent
                      ${isActive ? `${tw.txt.theme}` : `${tw.txt.normal}`}
                    `}
                  >
                    <span
                      className={`transition-colors ${
                        isActive ? `${tw.txt.theme}` : `${tw.txt.dark}`
                      }`}
                    >
                      {section.icon}
                    </span>
                    <span className={`${section.strong}`}>{section.title}</span>
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
                            ? `${tw.txt.theme} hover:bg-gray-300 dark:hover:bg-gray-500 hover:text-gray-600 dark:hover:text-gray-300`
                            : `${tw.txt.dim} hover:bg-gray-300 dark:hover:bg-gray-500 hover:text-gray-600 dark:hover:text-gray-300`
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
                  <div
                    className={`mt-1 ml-4 pl-4 border-l-2 ${tw.border.theme} space-y-1 animate-in slide-in-from-top-2 duration-300`}
                  >
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
                              ? `${tw.txt.theme} font-bold ${tw.bg.theme}`
                              : `${tw.txt.dim} hover:bg-gray-300 dark:hover:bg-gray-600 ${tw.border.bright}`
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

        {/* copyright */}
        <div
          className={`p-4 border-t ${tw.border.dim} text-xs text-center ${tw.txt.dark} ${tw.tcd}`}
        >
          <a
            className="inline-block mb-3 rounded-2xl bg-yellow-400 text-gray-950 font-bold text-xl p-3"
            href={process.env.REACT_APP_DONATION}
          >
            {uiText.donate}
          </a>
          <div></div>
          {uiText.copyright}
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* main content (manual page) */}
      <main
        ref={contentRef}
        className={`flex-1 h-full overflow-y-auto ${tw.main.bg} scroll-smooth relative ${tw.tcd}`}
      >
        <div
          style={{
            width: isMobile ? "100%" : `${CONTENT_WIDTH}px`,
          }}
          className="mx-auto max-w-4xl px-6 py-10 md:py-16 mt-10 md:mt-0"
        >
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
                  className={`p-2 ${tw.main.secIconBg} rounded-lg ${tw.txt.theme} ${tw.bg.theme} ${tw.tcd}`}
                >
                  {section.icon}
                </div>
                <h2 className={`text-2xl font-bold ${tw.txt.light} ${tw.tcd}`}>
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
                  className={`mt-10 pt-6 border-t border-dashed ${tw.border.dim} flex justify-end ${tw.tcd}`}
                >
                  <button
                    onClick={() =>
                      scrollToSection(currentSections[index + 1].id)
                    }
                    className={`group flex items-center text-md font-medium ${tw.txt.theme} hover:text-indigo-800 dark:hover:text-indigo-300 ${tw.tcd}`}
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
          <div className={`text-center py-10 ${tw.txt.dark} text-sm ${tw.tcd}`}>
            {uiText.footerMsg}
          </div>
        </div>
      </main>
      {/* )} */}
    </div>
  );
};

export default UserManual;
