'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

const utilityLinks = [
  { label: 'Wildfire Protection Plans', href: '/resources#wildfire-plans' },
  { label: "Today's Fire Weather", href: '/fire-weather' },
  { label: 'Current Active Fires', href: '/active-fires' },
  { label: 'Events', href: '/events' },
  { label: 'Donate', href: '/donate' },
];

const wildfireSafetyLinks = [
  { label: 'Prevention', href: '/prevention' },
  { label: 'Preparation', href: '/preparation' },
  { label: 'Evacuation', href: '/evacuation' },
];

type NavItem =
  | { label: string; href: string; dropdown?: undefined }
  | { label: string; dropdown: typeof wildfireSafetyLinks; href?: undefined };

const mainLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Wildfire Safety', dropdown: wildfireSafetyLinks },
  { label: 'Programs', href: '/programs' },
  { label: 'Resources', href: '/resources' },
  { label: 'News & Updates', href: '/news' },
  { label: 'Contact', href: '/contact' },
  { label: 'Firewise Reporting', href: '/firewise' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isWildfireSafetyActive = wildfireSafetyLinks.some(
    (link) => pathname === link.href || pathname.startsWith(link.href)
  );

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(
        `https://www.google.com/search?q=site:sehfsc.org+${encodeURIComponent(searchQuery)}`,
        '_blank'
      );
    }
  };

  return (
    <header className="w-full">
      {/* Utility Bar — hidden on mobile, shown on lg+ */}
      <div className="hidden lg:block bg-[#0f2e0f] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-1.5 gap-4 flex-wrap">
            {/* Utility nav links */}
            <nav className="flex items-center gap-0 flex-wrap">
              {utilityLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-sans font-bold uppercase tracking-wide text-gray-200 hover:text-white transition-colors px-3 py-1 border-r border-white/10 last:border-r-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social links + search */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 text-gray-300 hover:text-white transition-colors"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <div className="w-px h-4 bg-white/20" />

              {/* Social icons */}
              <a href="https://facebook.com/sehfsc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors p-1" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/sehfsc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors p-1" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@SEHFSC" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors p-1" aria-label="YouTube">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://linktr.ee/sehfsc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors p-1 text-xs font-bold font-sans" aria-label="Linktree">
                ltr
              </a>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-2">
              <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search site..."
                  className="flex-1 px-3 py-1.5 bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm rounded-sm focus:outline-none focus:border-white/50"
                  autoFocus
                />
                <button type="submit" className="px-3 py-1.5 bg-primary text-white text-sm font-bold rounded-sm hover:bg-primary-dark transition-colors">
                  Search
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b-2 border-primary shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 py-3">
              <img
                src="/images/SEHFSC_logo.png"
                alt="San Elijo Hills Fire Safe Council"
                className="h-12 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div>
                <div className="font-serif font-bold text-primary-deep text-xs sm:text-base leading-tight">San Elijo Hills</div>
                <div className="font-serif font-bold text-primary text-xs sm:text-sm leading-tight">Fire Safe Council</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              {mainLinks.map((item) => {
                if (item.dropdown) {
                  return (
                    <div
                      key={item.label}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                        className={`flex items-center gap-1 px-3 py-4 font-sans text-sm font-bold transition-colors border-b-2 -mb-0.5 ${
                          isWildfireSafetyActive
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-700 hover:text-primary hover:border-primary/40'
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-lg rounded-sm min-w-[180px] z-50">
                          {item.dropdown.map((subItem) => {
                            const isSubActive = pathname === subItem.href || pathname.startsWith(subItem.href);
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-4 py-2.5 font-sans text-sm font-bold transition-colors border-l-2 ${
                                  isSubActive
                                    ? 'border-primary text-primary bg-primary/5'
                                    : 'border-transparent text-gray-700 hover:text-primary hover:bg-gray-50 hover:border-primary/40'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-4 font-sans text-sm font-bold transition-colors border-b-2 -mb-0.5 ${
                      isActive
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-700 hover:text-primary hover:border-primary/40'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile urgent links — visible without opening menu */}
            <div className="flex lg:hidden items-center gap-1 mr-1">
              <Link href="/fire-weather" className="text-xs font-sans font-bold text-[#b8770a] bg-[#b8770a]/10 border border-[#b8770a]/30 px-2 py-1 rounded-sm">
                Fire Weather
              </Link>
              <Link href="/active-fires" className="text-xs font-sans font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded-sm">
                Active Fires
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-site-border bg-white">
            <div className="max-w-7xl mx-auto px-4 py-2">
              {mainLinks.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        aria-expanded={mobileDropdownOpen}
                        className={`flex items-center justify-between w-full py-2.5 px-2 font-sans font-bold text-sm border-b border-gray-100 transition-colors ${
                          isWildfireSafetyActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileDropdownOpen && (
                        <div className="bg-gray-50/50">
                          {item.dropdown.map((subItem) => {
                            const isSubActive = pathname === subItem.href || pathname.startsWith(subItem.href);
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-2 pl-8 pr-2 font-sans text-sm border-b border-gray-100 last:border-0 ${
                                  isSubActive
                                    ? 'font-bold text-primary'
                                    : 'text-gray-600 hover:text-primary'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 px-2 font-sans font-bold text-sm text-gray-700 hover:text-primary border-b border-gray-100 last:border-0"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="py-3 border-t border-gray-100 mt-2">
                <p className="text-xs font-sans font-bold text-gray-500 uppercase tracking-wide mb-2">Quick Links</p>
                {utilityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 px-2 font-sans text-sm text-gray-600 hover:text-primary border-b border-gray-100 last:border-0"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
