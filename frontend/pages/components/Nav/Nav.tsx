import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/articles">
          <li>Articles</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
