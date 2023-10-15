import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <div className={router.pathname === "/" ? "active" : "inactive"}>
          Home
        </div>
      </Link>
      <Link href="/about">
        <div className={router.pathname === "/about" ? "active" : "inactive"}>
          About
        </div>
      </Link>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 15px;
          margin: 3px;
          background-color: white;
          border: 2px solid black;
          border-top-left-radius: 255px 15px;
          border-top-right-radius: 15px 225px;
          border-bottom-right-radius: 225px 15px;
          border-bottom-left-radius: 15px 255px;
        }
        nav div {
          border-bottom: 3px solid;
          border-bottom-left-radius: 145px 10px;
          border-bottom-right-radius: 245px 10px;
        }
        .inactive {
          font-size: 20px;
        }
        .active {
          font-size: 30px;
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
