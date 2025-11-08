import Link from "next/link";
import "./footer.scss";
export async function Footer() {
  return (
    <footer id="footer">
      <img src="/d/footer-circ-l.png" alt="" className="footer-circ l" />
      <img src="/d/footer-circ-r.png" alt="" className="footer-circ r" />
      <img src="/g/logo_f.png" alt="" className="logo" />
      <div className="socials">
        <a
          className={"btn-sc btn"}
          target="_blank"
          href="https://www.instagram.com/djkatavila"
        >
          <img src="/g/ic_ig.png" alt="" className={"icon"} />
        </a>
        <a
          className={"btn-sc btn"}
          target="_blank"
          href="https://www.tiktok.com/@djkatavila"
        >
          <img src="/g/ic_tt.png" alt="" className={"icon"} />
        </a>
        <a
          className={"btn-sc btn"}
          target="_blank"
          href="https://www.youtube.com/@djkatavila/videos"
        >
          <img src="/g/ic_yt.png" alt="" className={"icon"} />
        </a>
        <a
          className={"btn-sc btn"}
          target="_blank"
          href="https://open.spotify.com/user/317z7s5hzcvddqdpamiogvzidaam?si=f59d2be0540f42dc"
        >
          <img src="/g/ic_sp.png" alt="" className={"icon"} />
        </a>
        <a
          className={"btn-sc btn"}
          target="_blank"
          href="https://www.mixcloud.com/katavila"
        >
          <img src="/g/ic_mc.png" alt="" className={"icon"} />
        </a>
        <a
          className={"btn-sc btn"}
          target="_blank"
          href="https://www.snapchat.com/add/djkatavila?share_id=2mONGScsSNOYu8E7CnV8OQ&locale=en_US"
        >
          <img src="/g/ic_sc.png" alt="" className={"icon"} />
        </a>
      </div>
      <nav id="fnav">
        <Link href={"/"} className="btn">
          {" "}
          ABOUT
        </Link>
        <Link href={"/schedule"} className="btn">
          {" "}
          SCHEDULE
        </Link>
        <Link href={"/booking"} className="btn">
          {" "}
          BOOKING
        </Link>
      </nav>
      <a href="https://x.com/shubamium2" className="attrib">
        <p>
          website design by <span>SHUBAMIUM</span>
        </p>
      </a>
    </footer>
  );
}
