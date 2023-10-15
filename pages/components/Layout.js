import React from "react";
import NavBar from "./NavBar";
import { Pangolin } from "next/font/google";

const pangolin = Pangolin({ weight: "400", subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={pangolin.className}>
      <NavBar />
      {children}
      <style jsx>{`
        .children {
          margin: 50px auto;
          width: 70%;
          padding: 20px;
          border: 1px solid RGB(230, 229, 230);
          box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
        }
      `}</style>
    </div>
  );
}
