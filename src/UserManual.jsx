import React, { useState, useEffect, useRef } from 'react';
import { Book, Menu, X, ChevronRight, Search } from 'lucide-react';

// 분리한 데이터와 상수를 import
import { docSections } from './data/manualData';
import { APP_VERSION, COMPANY_NAME, DOC_TITLE } from './constants';

const UserManual = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contentRef = useRef(null);

  // 스크롤 핸들러: 특정 섹션으로 부드럽게 이동
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = contentRef.current.scrollTop + 100;
      
      const currentSection = docSections.find(section => {
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
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      
      {/* 모바일 헤더 */}
      <div className="md:hidden fixed top-0 left-0 w-full h-14 bg-white border-b z-20 flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center space-x-2 font-bold text-indigo-600">
          <Book size={20} />
          <span>User Guide</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 왼쪽 1/4: Outline (사이드바) */}
      <aside 
        className={`
          fixed md:relative z-10 
          w-64 md:w-1/4 h-full bg-white border-r border-gray-200 
          flex flex-col transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          pt-14 md:pt-0
        `}
      >
        {/* 사이드바 헤더 (데스크탑) */}
        <div className="hidden md:flex items-center space-x-3 p-6 border-b border-gray-100">
          <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
            <Book size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-900">{DOC_TITLE}</h1>
            <p className="text-xs text-gray-500">{APP_VERSION}</p>
          </div>
        </div>

        {/* 검색 바 */}
        <div className="p-4 pb-0">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="검색하기..." 
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* 내비게이션 메뉴 */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-2 mt-2">
            Contents
          </div>
          {docSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors
                ${activeSection === section.id 
                  ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-500' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
              `}
            >
              <span className={activeSection === section.id ? 'text-indigo-600' : 'text-gray-400'}>
                {section.icon}
              </span>
              <span className="flex-1 text-left">{section.title}</span>
              {activeSection === section.id && <ChevronRight size={14} />}
            </button>
          ))}
        </nav>
        
        {/* 사이드바 푸터 */}
        <div className="p-4 border-t border-gray-200 text-xs text-center text-gray-400">
          &copy; 2025 {COMPANY_NAME}
        </div>
      </aside>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 오른쪽 3/4: 본문 내용 */}
      <main 
        ref={contentRef}
        className="flex-1 w-full md:w-3/4 h-full overflow-y-auto bg-gray-50 scroll-smooth relative"
      >
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 mt-10 md:mt-0">
          
          {docSections.map((section, index) => (
            <section 
              key={section.id} 
              id={section.id} 
              className="mb-16 scroll-mt-20 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
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

              {/* 하단 내비게이션 */}
              {index < docSections.length - 1 && (
                <div className="mt-10 pt-6 border-t border-dashed border-gray-200 flex justify-end">
                  <button 
                    onClick={() => scrollToSection(docSections[index + 1].id)}
                    className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    다음: {docSections[index + 1].title.split('. ')[1]}
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              )}
            </section>
          ))}

          <div className="text-center py-10 text-gray-400 text-sm">
            문서의 끝입니다. 도움이 필요하신가요? <a href="#" className="text-indigo-600 underline">고객지원팀에 문의하기</a>
          </div>

        </div>
      </main>
    </div>
  );
};

export default UserManual;