import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const router = useRouter();

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return router.pathname === path ? 'text-rose-500' : 'text-gray-700 hover:text-rose-500';
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-rose-500">Airbnb</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/home" 
              className={`font-medium transition-colors ${isActive('/home')}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors ${isActive('/about')}`}
            >
              About
            </Link>
            <Link 
              href="/posts" 
              className={`font-medium transition-colors ${isActive('/posts')}`}
            >
              Posts
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">
              Become a Host
            </button>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href="/home" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/home')} hover:bg-gray-50`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')} hover:bg-gray-50`}
            >
              About
            </Link>
            <Link 
              href="/posts" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/posts')} hover:bg-gray-50`}
            >
              Posts
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Become a Host
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;