'use client';
import React, { useState } from "react";

type Props = {};
import "./header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header({}: Props) {
	const pathname = usePathname();
  return (
    <>
      <header id="header">
        <img src="/g/logo_h.png" alt="" className="logo" />
        <img src="/d/sideneon.svg" alt="" className="sideneon" />
        <img src="/d/palm.png" alt="" className="palm l" />
        <img src="/d/palm.png" alt="" className="palm r" />
        <img src="/d/wave.png" alt="" className="wave l" />
        <img src="/d/wave.png" alt="" className="wave r" />
        <nav>
          <Link href="/" className={`btn btn-main ${pathname === '/' ? 'active' : ''}`}>
            ABOUT
          </Link>
          <Link href="/schedule" className={`btn btn-main ${pathname.includes('/schedule') ? 'active' : ''}`}>
            SCHEDULE
          </Link>
          <Link href="/booking" className={`btn btn-main ${pathname.includes('/booking') ? 'active' : ''}`}>
            BOOKING
          </Link>
        </nav>
      </header>
      <div className="header-lines">
        <img src="/d/hdl.png" alt="" className="l" />
        <img src="/d/hdl.png" alt="" className="r" />
      </div>
    </>
  );
}
