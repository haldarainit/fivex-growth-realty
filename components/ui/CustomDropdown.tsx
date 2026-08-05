'use client';

import React, { useState, useRef, useEffect } from 'react';

export interface DropdownOption {
  id: string;
  label: string;
}

interface CustomDropdownProps {
  label?: string;
  options: DropdownOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  variant?: 'glass' | 'white';
  direction?: 'down' | 'up';
  isInline?: boolean;
  placeholder?: string;
  className?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  selectedId,
  onSelect,
  variant = 'glass',
  direction,
  isInline = false,
  placeholder = 'Select Option',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.id === selectedId) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isGlass = variant === 'glass';
  const effectiveDirection = direction || (isGlass ? 'up' : 'down');

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Label header if provided */}
      {label && (
        <span
          className={`text-[9px] font-extrabold uppercase tracking-widest block mb-1 ${
            isGlass ? 'text-secondary' : 'text-gray-400'
          }`}
        >
          {label}
        </span>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between text-left transition-all cursor-pointer font-bold ${
          isGlass
            ? 'bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 text-white px-3.5 py-2.5 rounded-xl text-xs shadow-sm'
            : 'bg-slate-50 border border-gray-200 hover:border-secondary text-primary px-3.5 py-2.5 rounded-xl text-xs shadow-sm'
        }`}
      >
        <span className="truncate pr-2">{selectedOption ? selectedOption.label : placeholder}</span>
        <span
          className={`material-symbols-outlined text-base transition-transform duration-200 flex-shrink-0 ${
            isGlass ? 'text-secondary' : 'text-gray-400'
          } ${isOpen ? 'rotate-180' : ''}`}
        >
          keyboard_arrow_down
        </span>
      </button>

      {/* Popover or Inline Menu Dropdown */}
      {isOpen && (
        <div
          className={`${
            isInline
              ? 'relative mt-2 w-full z-10'
              : `absolute left-0 right-0 min-w-[200px] z-50 ${
                  effectiveDirection === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'
                }`
          } rounded-2xl shadow-2xl border overflow-hidden p-1.5 max-h-56 overflow-y-auto scrollbar-thin transition-all animate-fade-in ${
            isGlass
              ? 'bg-[#052E1F] border-white/20 text-white shadow-secondary/10'
              : 'bg-white border-gray-200 text-primary'
          }`}
        >
          {options.map((opt) => {
            const isSelected = opt.id === selectedId;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  onSelect(opt.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                  isGlass
                    ? isSelected
                      ? 'bg-secondary text-primary font-extrabold shadow-md'
                      : 'text-gray-200 hover:bg-white/15 hover:text-white'
                    : isSelected
                    ? 'bg-primary text-white font-extrabold shadow-md'
                    : 'text-gray-700 hover:bg-slate-100 hover:text-primary'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && (
                  <span
                    className={`material-symbols-outlined text-sm ${
                      isGlass ? 'text-primary font-bold' : 'text-secondary font-bold'
                    }`}
                  >
                    check
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
