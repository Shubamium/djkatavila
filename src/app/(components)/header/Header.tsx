import React from "react";

type Props = {};
import "./header.scss";
import Link from "next/link";
export default function Header({}: Props) {
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
          <Link href="/" className="btn btn-main active">
            ABOUT
          </Link>
          <Link href="/schedule" className="btn btn-main">
            SCHEDULE
          </Link>
          <Link href="/booking" className="btn btn-main">
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
