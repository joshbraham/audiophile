"use client";

import { useRef } from "react";
import CategoryList from "./CategoryList";

export default function Header() {
  const navDivRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleNav = () => {
    const btn = buttonRef.current;
    const nav = navDivRef.current;

    if (btn?.getAttribute("aria-expanded") === "false") {
      nav?.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
    } else {
      nav?.toggleAttribute("hidden", true);
      btn?.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <nav className="lg:hidden">
      <button
        ref={buttonRef}
        aria-label="menu"
        aria-expanded="false"
        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[13px] focus-visible:outline-primary group"
        onClick={toggleNav}
      >
        <svg
          aria-hidden="true"
          className="w-4 h-[15px] fill-white transition-colors group-hover:fill-primary"
        >
          <use href="#hamburger"></use>
        </svg>
      </button>
      <div
        ref={navDivRef}
        className="bg-transparent absolute w-full top-full left-0 after:bg-black after:bg-opacity-40 after:fixed after:inset-0 after:-z-10"
        hidden
      >
        <CategoryList className="bg-white pt-8 pb-9 px-6 md:pt-14 md:pb-[67px] md:px-10 rounded-b-lg" />
      </div>
    </nav>
  );
}
