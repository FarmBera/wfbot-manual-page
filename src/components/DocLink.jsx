import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

/**
 * hyperlink components for document movement
 * @param {string} to - target ID (ex: 'manual-install')
 * @param {string} children - link text
 * @param {boolean} showIcon - link icon display flag (default: false)
 */
const DocLink = ({ to, children, showIcon = true }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    // remove if ID include `#` 
    const targetId = to.replace(/^#/, '');
    const element = document.getElementById(targetId);

    if (element) {
      // scroll selected section
      element.scrollIntoView({ behavior: 'instant', block: 'start' });
    } else {
      console.warn(`Target element with id "${targetId}" not found.`);
    }
  };

  return (
    <a 
      href={`#${to.replace(/^#/, '')}`}
      onClick={handleClick}
      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium hover:underline cursor-pointer transition-colors"
    >
      {showIcon && <LinkIcon size={14} className="mr-1" />}
      {children}
    </a>
  );
};

export default DocLink;