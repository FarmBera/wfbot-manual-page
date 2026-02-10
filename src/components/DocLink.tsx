import React from 'react';
import {Link as LinkIcon} from 'lucide-react';
import {tw} from '../style/tailwind';

interface DocLinkProps {
    to: string; // target ID (ex: 'manual-install')
    children: React.ReactNode; // link text
    showIcon?: boolean; // link icon display flag (default: false)
}

/** Hyperlink components for document movement */
const DocLink: React.FC<DocLinkProps> = ({to, children, showIcon = true}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // remove if ID includes `#`
        const targetId = to.replace(/^#/, '');
        const element = document.getElementById(targetId);

        // scroll selected section
        if (element) element.scrollIntoView({behavior: 'instant' as ScrollBehavior, block: 'start'});
        else console.warn(`Target element with id "${targetId}" not found.`);
    };

    return (<a href={`#${to.replace(/^#/, '')}`} onClick={handleClick}
               className={`inline-flex items-center ${tw.txt.theme} hover:text-indigo-800 dark:hover:text-indigo-400 font-medium hover:underline cursor-pointer transition-colors`}>
        {showIcon && <LinkIcon size={14} className="mr-1"/>}
        {children}
    </a>);
};

export default DocLink;