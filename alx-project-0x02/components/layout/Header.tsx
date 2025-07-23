import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiSearch, FiGlobe, FiMenu, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-rose-500">airbnb</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 ml-8">
            <Link href="/home" className={`font-medium ${useRouter().pathname === '/home' ? 'text-rose-500' : 'text-gray-700 hover:text-rose-500'}`}>
              Home
            </Link>
            <Link href="/about" className={`font-medium ${useRouter().pathname === '/about' ? 'text-rose-500' : 'text-gray-700 hover:text-rose-500'}`}>
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center justify-between border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow duration-200">
            <button className="font-medium px-4">Anywhere</button>
            <span className="h-6 border-l border-gray-300"></span>
            <button className="font-medium px-4">Any week</button>
            <span className="h-6 border-l border-gray-300"></span>
            <button className="text-gray-500 pl-4 pr-2">Add guests</button>
            <button className="bg-rose-500 text-white p-2 rounded-full">
              <FiSearch className="h-4 w-4" />
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-sm font-medium hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">
              Become a Host
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FiGlobe className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-md transition-shadow cursor-pointer">
              <FiMenu className="h-5 w-5" />
              <div className="h-8 w-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
                <FiUser className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="flex items-center border border-gray-300 rounded-full p-2 shadow-sm">
            <FiSearch className="h-4 w-4 ml-2 text-gray-500" />
            <input
              type="text"
              placeholder="Where to?"
              className="ml-2 w-full outline-none bg-transparent text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;