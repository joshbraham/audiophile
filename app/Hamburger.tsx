"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <button aria-label="menu" className="interactive lg:hidden">
        <svg className="w-4 h-[15px] fill-white">
          <use href="#hamburger"></use>
        </svg>
      </button>
    </>
  );
}
