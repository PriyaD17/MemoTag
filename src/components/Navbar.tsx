'use client';

import React, { useState } from 'react';
import { Menu, MenuItem, HoveredLink } from '@/components/ui/navbar-menu';

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="w-[480px] top-8 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 rounded-full bg-white flex justify-center shadow-md transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 py-0 flex justify-between items-center w-full">
      <a href="/" className="text-xl font-bold text-blue-600 dark:text-white">
        MemoTag
      </a>

        {/* Menu */}
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <HoveredLink href="#home">Go to Home</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Solution">
            <HoveredLink href="#solution">Explore Solutions</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Traction">
            <HoveredLink href="#traction">View Traction</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Waitlist">
            <HoveredLink href="#cta">Join Waitlist</HoveredLink>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}
