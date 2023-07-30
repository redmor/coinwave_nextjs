import Link from "next/link";

function Navbar() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-2">
      <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 cursor-pointer transition-all ease-in-out duration-1000 "><Link href="/">coinwave</Link></div>
      <div className="block sm:hidden">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a855f7">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#a855f7"></path>
          </g>
        </svg>
      </div>
      <nav className="hidden sm:inline-block">
        <ul className="flex gap-9 text-2xl">
          <Link href="/" className="hover:text-purple-500 cursor-pointer transition-all ease-in-out duration-200">
            Home
          </Link>
          <Link href="/prices" className="hover:text-purple-500 cursor-pointer transition-all ease-in-out duration-200">
            Prices
          </Link>
          <Link href="/news" className="hover:text-purple-500 cursor-pointer transition-all ease-in-out duration-200">
            News
          </Link>
          <Link href="/about" className="hover:text-purple-500 cursor-pointer transition-all ease-in-out duration-200">
            About
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
