"use client";

import React, { useCallback, useRef } from "react";
import CategoryList from "./CategoryList";

type OrNull<T> = T | null | undefined;

// I opted with querySelector instead of React.useRef, as I would need multiple refs
// but forwardRef only accepts 1, so CategoryList was left as a standard component.

export default function Menu() {
  const menuRef = useRef<HTMLMenuElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const firstAnchor: OrNull<HTMLAnchorElement> =
    menuRef.current?.querySelector("a");
  const lastAnchor: OrNull<HTMLAnchorElement> =
    menuRef.current?.querySelector("li:last-child > a");

  function closeMenu() {
    menuRef.current?.toggleAttribute("hidden", true);
    buttonRef.current?.removeAttribute("aria-expanded");
  }

  function escapeMenuOnTab(shift: boolean, e: React.KeyboardEvent) {
    if (
      e.key === "Tab" &&
      e.shiftKey === shift &&
      (shift === true || document.activeElement === lastAnchor)
    ) {
      closeMenu();
    }
  }

  function escapeMenu(e: React.MouseEvent<HTMLMenuElement>) {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  }

  function toggleMenu() {
    const menu = menuRef.current;
    const button = buttonRef.current;

    menu?.toggleAttribute("hidden");
    if (menu?.hidden) {
      button?.removeAttribute("aria-expanded");
    } else {
      firstAnchor?.focus();
      button?.setAttribute("aria-expanded", "true");
    }
  }

  return (
    <>
      <button
        ref={buttonRef}
        aria-label="menu"
        aria-haspopup="menu"
        className="interactive lg:hidden"
        onClick={toggleMenu}
        onKeyDown={escapeMenuOnTab.bind(null, true)}
      >
        <svg className="w-4 h-[15px] fill-white">
          <use href="#hamburger"></use>
        </svg>
      </button>
      <menu
        role="menu"
        ref={menuRef}
        className="bg-transparent absolute w-full top-full after:bg-black after:bg-opacity-40 after:fixed after:inset-0 after:-z-10"
        onClick={escapeMenu}
        onKeyDown={escapeMenuOnTab.bind(null, false)}
        hidden
      >
        <CategoryList className="bg-white pt-8 pb-9 px-6 md:pt-14 md:pb-[67px] md:px-10 rounded-b-lg" />
      </menu>
    </>
  );
}
