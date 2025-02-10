"use client"

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { newsData } from '@/data/newsData';

type SubMenuItem = {
  title: string;
  href: string;
  submenus?: SubMenuItem[];
};

const menuStructure: Array<{
  title: string;
  icon: string;
  href?: string;
  submenus?: SubMenuItem[];
}> = [
  {
    title: 'About Us',
    icon: '🏢',
    submenus: [
      {
        title: 'Company Overview',
        href: '/about/company-overview',
        submenus: [
          { title: 'Our History', href: '/about/company-overview/history' },
          { title: 'Vision & Mission', href: '/about/company-overview/vision' },
          { title: 'Core Values', href: '/about/company-overview/values' }
        ]
      },
      {
        title: 'Our Team',
        href: '/about/team',
        submenus: [
          { title: 'Management', href: '/about/team/management' },
          { title: 'Board of Directors', href: '/about/team/board' },
          { title: 'Organization', href: '/about/team/organization' }
        ]
      }
    ]
  },
  {
    title: 'Services',
    icon: '⚓',
    submenus: [
      {
        title: 'Maritime Solutions',
        href: '/services/maritime',
        submenus: [
          { title: 'Fleet Management', href: '/services/maritime/fleet' },
          { title: 'Shipping Routes', href: '/services/maritime/routes' },
          { title: 'Safety Standards', href: '/services/maritime/safety' }
        ]
      },
      {
        title: 'Energy Services',
        href: '/services/energy',
        submenus: [
          { title: 'Oil Transport', href: '/services/energy/oil' },
          { title: 'Gas Solutions', href: '/services/energy/gas' },
          { title: 'Renewable Energy', href: '/services/energy/renewable' }
        ]
      }
    ]
  },
  {
    title: 'Sustainability',
    icon: '🌍',
    submenus: [
      {
        title: 'Environmental',
        href: '/sustainability/environmental',
        submenus: [
          { title: 'Carbon Footprint', href: '/sustainability/environmental/carbon' },
          { title: 'Ocean Protection', href: '/sustainability/environmental/ocean' },
          { title: 'Green Tech', href: '/sustainability/environmental/tech' }
        ]
      },
      {
        title: 'Social Impact',
        href: '/sustainability/social',
        submenus: [
          { title: 'Community', href: '/sustainability/social/community' },
          { title: 'Education', href: '/sustainability/social/education' },
          { title: 'Healthcare', href: '/sustainability/social/healthcare' }
        ]
      }
    ]
  },
  {
    title: 'Contact Us',
    icon: '📞',
    href: '/contact'
  }
];

interface DropdownProps {
  items: SubMenuItem[];
  level?: number;
  onClose: () => void;
}

const DropdownMenu: React.FC<DropdownProps> = ({ items, level = 0, onClose }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubmenu(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // Delay before closing submenu
  };

  return (
    <div
      ref={menuRef}
      className={`
        absolute ${level === 0 ? 'top-full' : 'top-0'} 
        ${level === 0 ? 'left-0' : 'left-full'} 
        min-w-[250px] bg-white shadow-lg rounded-lg border border-gray-100
        z-[${1000 - level}]
      `}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.title)}
        >
          <Link
            href={item.href || '#'}
            className={`
              block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 
              hover:text-blue-500 border-b border-gray-50 last:border-0 
              flex items-center justify-between group
              ${activeSubmenu === item.title ? 'bg-gray-50 text-blue-500' : ''}
            `}
            onClick={(e) => {
              if (item.submenus) {
                e.preventDefault();
              }
            }}
          >
            <span>{item.title}</span>
            {item.submenus && (
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  activeSubmenu === item.title ? 'rotate-0' : '-rotate-90'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </Link>

          {item.submenus && activeSubmenu === item.title && (
            <DropdownMenu
              items={item.submenus}
              level={level + 1}
              onClose={onClose}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dynamicTextColor, setDynamicTextColor] = useState<string>('text-white');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Check if we're on a news detail page
    const newsDetailMatch = pathname.match(/^\/news\/(.+)/);
    if (newsDetailMatch) {
      const newsId = newsDetailMatch[1];
      const newsItem = newsData.find(news => news.id === newsId);
      
      // Use a contrasting color that stands out against transparent/white backgrounds
      setDynamicTextColor('text-gray-800 dark:text-white');
    }

    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Delay before closing menu
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = newsData.filter(news => 
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Search results:', results);
    // You can add more advanced search handling here
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm('');
  };

  // Determine if we're on a page that should have dynamic coloring
  const isDynamicPage = 
    pathname === '/' || 
    pathname.startsWith('/news/') ||
    pathname.startsWith('/about/');

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${
        isDynamicPage && !isScrolled 
          ? 'bg-transparent' 
          : 'bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`text-2xl font-bold ${
                isDynamicPage && !isScrolled 
                  ? dynamicTextColor 
                  : 'text-blue-600'
              }`}
            >
              Corporate Energy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuStructure.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenus && handleMouseEnter(item.title)}
                onMouseLeave={() => item.submenus && handleMouseLeave()}
              >
                {item.submenus ? (
                  <button
                    className={`flex items-center space-x-1 py-2 ${
                      isDynamicPage && !isScrolled 
                        ? dynamicTextColor 
                        : 'text-gray-700'
                    } hover:text-blue-500 transition-colors`}
                  >
                    <span className="mr-1">{item.icon}</span>
                    <span>{item.title}</span>
                    {item.submenus && (
                      <svg
                        className={`w-4 h-4 ml-0.5 transform transition-transform ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className={`flex items-center space-x-1 py-2 ${
                      isDynamicPage && !isScrolled 
                        ? dynamicTextColor 
                        : 'text-gray-700'
                    } hover:text-blue-500 transition-colors`}
                  >
                    <span className="mr-1">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                )}

                {item.submenus && activeDropdown === item.title && (
                  <DropdownMenu
                    items={item.submenus}
                    onClose={() => setActiveDropdown(null)}
                  />
                )}
              </div>
            ))}
            
            {/* Search Icon */}
            <div className="relative">
              <button 
                onClick={toggleSearch}
                className={`flex items-center space-x-1 py-2 ${
                  isDynamicPage && !isScrolled 
                    ? dynamicTextColor 
                    : 'text-gray-700'
                } hover:text-blue-500 transition-colors`}
              >
                <span className="mr-1">🔍</span>
                <span>Search</span>
              </button>
            </div>

            {isSearchOpen && (
              <form 
                onSubmit={handleSearch} 
                className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-4 z-50"
              >
                <div className="flex items-center">
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search news and content"
                    className="px-3 py-2 border rounded-l-md w-64"
                  />
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                  >
                    Go
                  </button>
                  <button 
                    type="button"
                    onClick={toggleSearch}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
              </form>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${
                isDynamicPage && !isScrolled 
                  ? dynamicTextColor 
                  : 'text-gray-800'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className={`md:hidden py-4 ${
              isDynamicPage && !isScrolled 
                ? 'bg-black/50' 
                : 'bg-white'
            }`}
          >
            <div className="space-y-1">
              {menuStructure.map((item, index) => (
                <div key={index} className="px-4">
                  {item.submenus ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.title ? null : item.title
                        )
                      }
                      className={`flex items-center w-full py-2 ${
                        isDynamicPage && !isScrolled 
                          ? dynamicTextColor 
                          : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      <span>{item.title}</span>
                      {item.submenus && (
                        <svg
                          className={`w-4 h-4 ml-auto transition-transform ${
                            activeDropdown === item.title ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href || '/'}
                      className={`flex items-center w-full py-2 ${
                        isDynamicPage && !isScrolled
                          ? dynamicTextColor 
                          : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  )}

                  {item.submenus && activeDropdown === item.title && (
                    <div className="pl-8 py-2 space-y-2">
                      {item.submenus.map((submenu: SubMenuItem, subIndex: number) => (
                        <div key={subIndex}>
                          <Link
                            href={submenu.href}
                            className={`block py-1 ${
                              isDynamicPage && !isScrolled
                                ? 'text-gray-100 hover:text-white' 
                                : 'text-gray-600 hover:text-gray-800'
                            }`}
                          >
                            {submenu.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Search */}
              <div className="px-4 mt-4">
                <button 
                  onClick={toggleSearch}
                  className={`flex items-center w-full py-2 ${
                    isDynamicPage && !isScrolled
                      ? dynamicTextColor 
                      : 'text-gray-700'
                  }`}
                >
                  <span className="mr-2">🔍</span>
                  <span>Search</span>
                </button>
              </div>

              {isSearchOpen && (
                <div className="px-4 mt-2">
                  <form onSubmit={handleSearch} className="space-y-2">
                    <input
                      type="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search news and content"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    <div className="flex space-x-2">
                      <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
                      >
                        Search
                      </button>
                      <button 
                        type="button"
                        onClick={toggleSearch}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 w-full"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
