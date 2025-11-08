"use client";
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
        <div className="linktree">
          <a
            className={"btn-sc btn"}
            target="_blank"
            href="https://www.instagram.com/djkatavila"
          >
            <img src="/g/ic_ig.png" alt="" className={"icon"} />
            <span>INSTAGRAM</span>
          </a>
          <a
            className={"btn-sc btn"}
            target="_blank"
            href="https://www.tiktok.com/@djkatavila"
          >
            <img src="/g/ic_tt.png" alt="" className={"icon"} />
            <span>TIKTOK</span>
          </a>
          <a
            className={"btn-sc btn"}
            target="_blank"
            href="https://www.youtube.com/@djkatavila/videos"
          >
            <img src="/g/ic_yt.png" alt="" className={"icon"} />
            <span>YOUTUBE</span>
          </a>
          <a
            className={"btn-sc btn"}
            target="_blank"
            href="https://open.spotify.com/user/317z7s5hzcvddqdpamiogvzidaam?si=f59d2be0540f42dc"
          >
            <img src="/g/ic_sp.png" alt="" className={"icon"} />
            <span>TIKTOK</span>
          </a>
          <a
            className={"btn-sc btn"}
            target="_blank"
            href="https://www.snapchat.com/add/djkatavila?share_id=2mONGScsSNOYu8E7CnV8OQ&locale=en_US"
          >
            <img src="/g/ic_sc.png" alt="" className={"icon"} />
            <span>SNAPCHAT</span>
          </a>
        </div>
        <nav>
          <Link
            href="/"
            className={`btn btn-main ${pathname === "/" ? "active" : ""}`}
          >
            ABOUT
          </Link>
          <Link
            href="/schedule"
            className={`btn btn-main ${pathname.includes("/schedule") ? "active" : ""}`}
          >
            SCHEDULE
          </Link>
          <Link
            href="/booking"
            className={`btn btn-main ${pathname.includes("/booking") ? "active" : ""}`}
          >
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
