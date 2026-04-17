import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 px-4 pt-20">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-900 mb-4">404</h1>
          <h2 className="text-3xl text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all hover:shadow-lg"
          >
            <Home className="size-5" />
            Go to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-900 hover:text-white transition-all"
          >
            <ArrowLeft className="size-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
