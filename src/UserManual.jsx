import React, { useState, useEffect, useRef } from 'react';
import { Book, Menu, X, ChevronRight, Search, Globe, ChevronDown, Check } from 'lucide-react';

import { manualData } from './data/manualData';
import { APP_INFO, UI_TEXTS } from './constants/constants';

const UserManual = () => {
  // 언어 상태 (기본값: 'ko')
  const [lang, setLang] = useState('ko');
  // 드롭다운 메뉴 열림 상태
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contentRef = useRef(null);

  // 현재 언어에 맞는 데이터와 텍스트 추출
  const currentSections = manualData[lang];
  const uiText = UI_TEXTS[lang];

  // 지원 언어 목록 정의
  const languages = [
    { code: 'ko', label: '한국어' },
    { code: 'en', label: 'English' }
  ];

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangMenuOpen && !event.target.closest('.lang-dropdown')) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = contentRef.current.scrollTop + 100;
      
      const currentSection = currentSections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const scrollContainer = contentRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentSections]);

  // 언어 변경 핸들러
  const handleLangSelect = (code) => {
    setLang(code);
    setIsLangMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      
      {/* 모바일 헤더 */}
      <div className="md:hidden fixed top-0 left-0 w-full h-14 bg-white border-b z-20 flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center space-x-2 font-bold text-indigo-600">
          <Book size={20} />
          <span>User Guide</span>
        </div>
        <div className="flex items-center space-x-2">
          
          {/* 모바일 언어 드롭다운 */}
          <div className="relative lang-dropdown">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
              className="flex items-center space-x-1 p-2 text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <Globe size={20} />
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangSelect(l.code)}
                    className={`
                      w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-indigo-50 transition-colors
                      ${lang === l.code ? 'text-indigo-600 font-medium bg-indigo-50/50' : 'text-gray-600'}
                    `}
                  >
                    {l.label}
                    {lang === l.code && <Check size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 왼쪽 사이드바 */}
      <aside 
        className={`
          fixed md:relative z-10 
          w-64 md:w-1/4 h-full bg-white border-r border-gray-200 
          flex flex-col transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          pt-14 md:pt-0
        `}
      >
        {/* 사이드바 헤더 & 언어 드롭다운 (데스크탑) */}
        <div className="hidden md:flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
              <Book size={24} />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">{uiText.docTitle}</h1>
              <p className="text-xs text-gray-500">{APP_INFO.version} {uiText.updated}</p>
            </div>
          </div>
          
          {/* 데스크탑 언어 드롭다운 */}
          <div className="relative lang-dropdown">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600 transition-all border border-transparent hover:border-gray-200"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{languages.find(l => l.code === lang).label}</span>
              <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangSelect(l.code)}
                    className={`
                      w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors
                      ${lang === l.code ? 'text-indigo-600 font-bold bg-indigo-50/30' : 'text-gray-600'}
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

        {/* 검색 바 */}
        <div className="p-4 pb-0">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder={uiText.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
            />
          </div>
        </div>

        {/* 내비게이션 메뉴 */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-2 mt-2">
            {uiText.contents}
          </div>
          {currentSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all
                ${activeSection === section.id 
                  ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-500 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
              `}
            >
              <span className={`transition-colors ${activeSection === section.id ? 'text-indigo-600' : 'text-gray-400'}`}>
                {section.icon}
              </span>
              <span className="flex-1 text-left">{section.title}</span>
              {activeSection === section.id && <ChevronRight size={14} className="animate-in fade-in slide-in-from-left-1" />}
            </button>
          ))}
        </nav>
        
        {/* 사이드바 푸터 */}
        <div className="p-4 border-t border-gray-200 text-xs text-center text-gray-400">
          {uiText.copyright}
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 메인 콘텐츠 */}
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
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="prose prose-indigo max-w-none">
                {section.content}
              </div>

              {index < currentSections.length - 1 && (
                <div className="mt-10 pt-6 border-t border-dashed border-gray-200 flex justify-end">
                  <button 
                    onClick={() => scrollToSection(currentSections[index + 1].id)}
                    className="group flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    {uiText.next}: {currentSections[index + 1].title.split('. ')[1] || currentSections[index + 1].title}
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </section>
          ))}

          <div className="text-center py-10 text-gray-400 text-sm">
            {uiText.footerMsg} <a href="#" className="text-indigo-600 underline hover:text-indigo-800 transition-colors">{uiText.contactSupport}</a>
          </div>

        </div>
      </main>
    </div>
  );
};

export default UserManual;