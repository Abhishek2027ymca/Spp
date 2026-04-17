import { Link, useLocation } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatLabel = (str: string) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-blue-50 border-b border-blue-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-600 hover:text-blue-900 transition-colors"
          >
            <Home className="size-4" />
            <span>Home</span>
          </Link>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <div key={routeTo} className="flex items-center gap-2">
                <ChevronRight className="size-4 text-gray-400" />
                {isLast ? (
                  <span className="text-blue-900 font-medium">{formatLabel(name)}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-600 hover:text-blue-900 transition-colors"
                  >
                    {formatLabel(name)}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
