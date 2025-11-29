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
} from "lucide-react";

// import { manualData } from "./data/manualData";
import { APP_INFO, UI_TEXTS } from "./constants/constants";
import { getManualSections } from "./data/manualData";
import { COMMON } from "./constants/common";

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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      {/* mobile header */}
      <div className="md:hidden fixed top-0 left-0 w-full h-14 bg-white border-b z-20 flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center space-x-2 font-bold text-indigo-600">
          <Book size={20} />
          <span>
            {COMMON.name} {uiText.docTitle}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative lang-dropdown">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 p-2 text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <Globe size={20} />
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  isLangMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangSelect(l.code)}
                    className={`
                      w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-indigo-50 transition-colors
                      ${
                        lang === l.code
                          ? "text-indigo-600 font-medium bg-indigo-50/50"
                          : "text-gray-600"
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
            className="p-2 text-gray-600"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* sidebar */}
      <aside
        className={`
          fixed md:relative z-10 
          w-64 md:w-1/4 h-full bg-white border-r border-gray-200 
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
        <div className="hidden md:flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
              <Book size={24} />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">
                {uiText.docTitle}
              </h1>
              <p className="text-xs text-gray-500">{APP_INFO.version}</p>
            </div>
          </div>

          <div className="relative lang-dropdown">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600 transition-all border border-transparent hover:border-gray-200"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">
                {languages.find((l) => l.code === lang).label}
              </span>
              <ChevronDown
                size={14}
                className={`text-gray-400 transition-transform duration-200 ${
                  isLangMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangSelect(l.code)}
                    className={`
                      w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors
                      ${
                        lang === l.code
                          ? "text-indigo-600 font-bold bg-indigo-50/30"
                          : "text-gray-600"
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

        {/* search bar */}
        <div className="p-4 pb-0">
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={16}
            />
            <input
              type="text"
              disabled={true}
              placeholder={uiText.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
            />
          </div>
        </div>

        {/* navigation menu */}
        <nav ref={sidebarRef} className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-2 mt-2">
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
                        ? "bg-indigo-50 shadow-sm"
                        : "bg-white hover:bg-gray-100"
                    }
                  `}
                  onClick={(e) => handleItemClick(e, section)}
                >
                  {/* main link */}
                  <button
                    data-section-id={section.id}
                    className={`
                      flex-1 flex items-center space-x-3 text-sm font-medium text-left bg-transparent
                      ${isActive ? "text-indigo-700" : "text-gray-600"}
                    `}
                  >
                    <span
                      className={`transition-colors ${
                        isActive ? "text-indigo-600" : "text-gray-400"
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
                            ? "text-indigo-500 hover:bg-indigo-100"
                            : "text-gray-400 hover:bg-gray-200 hover:text-gray-600"
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
                  <div className="mt-1 ml-4 pl-4 border-l-2 border-indigo-100 space-y-1 animate-in slide-in-from-top-2 duration-200">
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
                              ? "text-indigo-600 font-semibold bg-indigo-50/50"
                              : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
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

        <div className="p-4 border-t border-gray-200 text-xs text-center text-gray-400">
          {uiText.copyright}
        </div>
      </aside>

      {/* main content (manual page) */}
      {/* {isMobileMenuOpen && ( */}
      {lang === languages[1].code ? (
        // temporary: english manual page
        <main
          ref={contentRef}
          className="flex-1 w-full md:w-3/4 h-full overflow-y-auto bg-gray-50 scroll-smooth relative"
        >
          <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 mt-10 md:mt-0">
            <section className="mb-16 scroll-mt-20 bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  We're Sorry.
                </h1>

                <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                      <Globe size={50} className="text-indigo-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2 py-5">
                    Translation in Progress
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The English Version of the{" "}
                    <strong>{uiText.serviceName}</strong> manual is currently
                    under development.
                    <br />
                    We are working hard to provide high-quality documentation
                    for our global users.
                  </p>
                  <p className="text-sm text-gray-500">
                    Please refer to the Korean version for the time being.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> This document system is running on
                    version {COMMON.version}.
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
          className="flex-1 w-full md:w-3/4 h-full overflow-y-auto bg-gray-50 scroll-smooth relative"
        >
          <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 mt-10 md:mt-0">
            {currentSections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-16 scroll-mt-20 bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
              >
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>

                <div className="prose prose-indigo max-w-none">
                  {section.content}
                </div>

                {index < currentSections.length - 1 && (
                  <div className="mt-10 pt-6 border-t border-dashed border-gray-200 flex justify-end">
                    <button
                      onClick={() =>
                        scrollToSection(currentSections[index + 1].id)
                      }
                      className="group flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
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

            <div className="text-center py-10 text-gray-400 text-sm">
              {uiText.footerMsg}{" "}
              <a
                href="/"
                className="text-indigo-600 underline hover:text-indigo-800 transition-colors"
              >
                {uiText.contactSupport}
              </a>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default UserManual;
