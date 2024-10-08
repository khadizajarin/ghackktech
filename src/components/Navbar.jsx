// components/NavBar.js
import Link from 'next/link';

import { Cinzel_Decorative,Cinzel } from 'next/font/google'


const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
})

const cinzel_decorative = Cinzel_Decorative({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700', '900'],
  })


const NavBar = () => {
  return (
    // <nav className="bg-base-100 shadow-md" style={{ fontFamily: cinzel.style.fontFamily,  fontWeight: '900' }}>
    //   <div className="container lg:px-10 px-2 py-2 flex justify-between items-center">
    //     <Link href="/">
    //       <div className="text-xl font-bold">Lore Olympus</div>
    //     </Link>
    //     <div>
    //       <Link href="/about">
    //         <div className="btn btn-ghost">About</div>
    //       </Link>
    //       <Link href="/characters">
    //         <div className="btn btn-ghost">Characters</div>
    //       </Link>
    //       <Link href="/contact">
    //         <div className="btn btn-ghost">Contact</div>
    //       </Link>
    //     </div>
    //   </div>
    // </nav>

    <div className="navbar  lg:p-5 shadow-lg bg-primary" style={{ fontFamily: cinzel_decorative.style.fontFamily,  fontWeight: '900' }}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost text-secondary lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>About</a></li>
        <li>
          <a>Characters</a>
          <ul className="p-2">
            <li><a>Male</a></li>
            <li><a>Female</a></li>
          </ul>
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-secondary">daisyUI</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-secondary ">
      <li><a>About</a></li>
      <li>
        <details>
          <summary>Characters</summary>
          <ul className="p-2">
            <li><a>Male</a></li>
            <li><a>Female</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
  );
};

export default NavBar;
